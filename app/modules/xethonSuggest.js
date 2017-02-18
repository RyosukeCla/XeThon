export default function(CodeMirror) {

  /**
   * Tex Suggestion Lists
   */
  const texWithNoBS = [
    // Document class
    "book", "report", "jarticle", "article", "letter", "slides",
    "document",

    // Packages
    "fullpage", "anysize", "multicol", "latexsym", "graphicx",
    "url", "amsmath", "amssymb",

    // Common
    "pt", "letterpaper", "a4paper", "twocolumn",
    "twoside", "landscape", "draft",

    // Text
    "comment", "quote", "quotation", "verse",

    // List
    "enumerate", "itemize", "description",

    // Floating bodies
    "table", "figure", "equation",

    // Verbatim
    "verbatim",

    // Justification
    "centor", "flushleft", "flushright",

    // Document structure
    "secnumdepth",

    // tabluer
    "p{}", "@{}",

  ];

  const texWithBS = [
    // Document class
    "begin", "end", "documentclass", "documentclass[]",

    // Package
    "usepackage",

    // Title
    "author", "title", "date",

    // Miscellaneous
    "pagestyle",
    "hspace", "vspace", "rule{}", "linespread",

    // Document Structure
    "part", "chapter", "section", "subsection",
    "subsubsection", "paragraph", "subparagraph",
    "setcounter{}", "section*",

    // List
    "item",

    // Reference
    "label", "ref", "pageref", "footnote",

    // Floating bodies
    "caption",

    // Text props
    "textrm", "textsf", "texttt", "textmd",
    "textbf", "textup", "textit", "textsl",
    "textsl", "textsc", "emph", "textnormal",
    "underline",

    // Citation
    "cite", "citeA", "citeN", "shortcite",
    "shortciteA", "shortciteN", "citeyear",
    "citeNP",

    // Math
    "^{}", "_{}", "mathbb", "sqrt",
  ];

  const texWithBSElse = [
    // Document class
    "begin", "begin{}[]", "end",

    // Title
    "maketitle",

    // Miscellaneous
    "tableofcontents",

    // List
    "item[]", "item",

    // text props
    "rmfamily", "sffamily", "ttfamily", "mdseries", "bfseries",
    "bfseries", "upshape", "itshape", "scshape", "em",
    "normalfont",

    // Font size
    "tiny", "scriptsize", "footnotesize", "small",
    "normalsize", "large", "Large", "LARGE",
    "huge", "Huge",

    // Verbatim text
    "verb!text!",

    // Justification
    "centering", "raggedright", "raggedleft",

    // symbols
    "&", "_", "$", "%", "ldots", "textbullet",
    "textbar", "textbackslash", "#", "S",
    "^{}", "~{}",

    // accsents
    "'", "`", "^", "~", "=", ".", '"', "H",
    "c", "v", "d", "b", "t", "oe", "OE", "ae",
    "AE", "aa", "AA", "o", "O", "l", "L", "i",
    "j",

    // delimiters
    "textless", "textgreater", "{", "}",

    // line
    "\\", "\\*", "kill", "pagebreak", "noindent",

    // Miscellaneous
    "today", "sim",

    // tabbing env
    "*", ">",

    // tabular
    "hline", "cline{}", "multicolumn{}{}{}", "parbox[]{}",

    // Math
    "frac{}{}", "sum", "sqrt[]{}", "prod",
    "leq", "geq", "neq", "approx", "times",
    "div", "pm", "cdot", "circ", "prime", "cdots",
    "infty", "neg", "wedge", "vee", "supset", "forall",
    "in", "rightarrow", "leftarrow", "subset", "exists",
    "notin", "Rightarrow", "Leftarrow","cup", "cap", "mid",
    "Leftrightarrow", "leftrightarrow", "dot", "hat", "bar",
    "tilde", "alpha", "beta", "gmma", "delta", "epsilon",
    "zeta", "eta", "varepsilon", "theta", "iota", "kappa",
    "vartheta", "lambda", "mu", "nu", "xi", "pi", "rho",
    "sigma", "tau", "upsilon", "phi", "chi", "psi", "omega",
    "Gamma", "Delta", "Theta", "Lamnda", "Xi", "Pi", "Sigma",
    "Upsilon", "Phi", "Psi", "Omega",
  ];

  /**
   *  Python Suggestion Lists
   */
  const pythonDictionary = [
    // Reserved
    "and", "as", "assert", "break", "class", "continue",
    "def", "elif", "else", "except", "exec", "finally",
    "for", "from", "global", "if", "import", "in",
    "is", "lambda", "not", "or", "pass", "print",
    "raise", "return", "try", "while", "with", "yield",

    // Special
    "__main__", "__init__", "__getitem__", "__setitem__",
    "__iter__", "__cmp__", "__enter__", "__exit__",
    "__name__", "__class__", "__file__", "__all__",
    "__doc__", "__slots__", "__builtin__", "__future__",
  ];

  function makeSuggestDictionary(prefix, suffix, dict) {
    var sdict = [];
    for (var i in dict) {
      sdict.push(prefix+dict[i]+suffix);
    }
    return sdict;
  }

  function pregQuote(str) {
    return (str).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

  function arrayFilter(array, tokenStr) {
    const regex = new RegExp("^" + pregQuote(tokenStr));

    return array.filter(function(element) {
      return (element.match(regex));
    });
  }

  const texSuggestionsWithBS = makeSuggestDictionary("\\", "{}", texWithBS).concat(
    makeSuggestDictionary("\\", "", texWithBSElse)
  );

  // python Regex - function, variable
  const WORD = /(\b[a-zA-Z][a-zA-Z0-9]*(?= *\()|\b[a-zA-Z][a-zA-Z0-9]*(?= *=))/, RANGE = 500;

  function anywords(editor, options) {
    var word = options && options.word || WORD;
    var range = options && options.range || RANGE;
    var cur = editor.getCursor(), curLine = editor.getLine(cur.line);
    var end = cur.ch, start = end;
    while (start && word.test(curLine.charAt(start - 1))) --start;
    var curWord = start != end && curLine.slice(start, end);

    var list = options && options.list || [], seen = {};
    var re = new RegExp(word.source, "g");
    for (var dir = -1; dir <= 1; dir += 2) {
      var line = cur.line, endLine = Math.min(Math.max(line + dir * range, editor.firstLine()), editor.lastLine()) + dir;
      for (; line != endLine; line += dir) {
        var text = editor.getLine(line), m;
        while (m = re.exec(text)) {
          if (line == cur.line && m[0] === curWord) continue;
          if ((!curWord || m[0].lastIndexOf(curWord, 0) == 0) && !Object.prototype.hasOwnProperty.call(seen, m[0])) {
            seen[m[0]] = true;
            list.push(m[0]);
          }
        }
      }
    }
    return list;
  }


  CodeMirror.registerHelper("hint", "xethon", function(cm, options) {
    var cur=cm.getCursor(), token=cm.getTokenAt(cur);
    var start=token.start, end=token.end;
    var mode = CodeMirror.innerMode(cm.getMode(), cm.getTokenAt(cur).state).mode.name;
    var tokenStr = token.string;

    var fileterdDictionary = [];
    if (mode == "stex") {
      if (tokenStr.charAt(0) == "\\") {
        fileterdDictionary = arrayFilter(texSuggestionsWithBS, tokenStr);
      } else if (tokenStr.match(/^[a-z]/)) {
        fileterdDictionary = arrayFilter(texWithNoBS, tokenStr);
      } else {
        return;
      }
    } else if (mode == "python") {
      if (tokenStr.match(/^[a-zA-Z]/)) {
        var list = anywords(cm, options);
        Array.prototype.push.apply(list, pythonDictionary);
        fileterdDictionary = arrayFilter(list, tokenStr);
      } else {
        return;
      }
    } else {
      return;
    }

    return {
      list: fileterdDictionary,
      from: CodeMirror.Pos(cur.line, start),
      to: CodeMirror.Pos(cur.line, end)
    };
  });
}
