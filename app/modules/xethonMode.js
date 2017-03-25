export default function(CodeMirror) {
  CodeMirror.defineMode("pythonWithTex", function(config) {
    const pythonMode = CodeMirror.getMode(config, "python");
    const texMode = CodeMirror.getMode(config, "stex");
    return CodeMirror.multiplexingMode(
      pythonMode,
      {
        open: '"', close: '"',
        mode: texMode,
      },
      {
        open: "'", close: "'",
        mode: texMode,
      },
      {
        open: '"""', close: '"""',
        mode: texMode,
      },
    );
  });

  CodeMirror.defineMode("xethon", function(config) {
    const texMode = CodeMirror.getMode(config, "stex");
    const texpyMode = CodeMirror.getMode(config, "pythonWithTex");
    return CodeMirror.multiplexingMode(
      texMode,
      {
        open: "<<<", close: ">>>",
        mode: texpyMode,
      },
      {
        open: "<<", close: ">>",
        mode: texpyMode,
      },
      {
        open: "def py:", close: "end",
        mode: texpyMode,
      }
    );
  });
}
