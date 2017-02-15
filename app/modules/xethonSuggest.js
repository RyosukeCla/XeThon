const texDictionary = [
  "alpha",
  "beta",
  "begin",
];

function makeSuggestDictionary(prefix, dict) {
  console.log([prefix, dict]);
  var sdict = [];
  for (var i in dict) {
    sdict.push({
      text: dict[i],
      displayText: prefix + dict[i],
    });
  }
  return sdict;
}

const texSuggest = makeSuggestDictionary("\\", texDictionary);

export const xethonSuggest = [
  {
    mode: 'stex',
    startChar: '\\',
    listCallback: function() {
      return texSuggest;
    }
  },
];
