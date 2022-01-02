var soundex_rules = [
  [/[йуеёыахоэяиюьъ]/g, ''],
  [/[с]?тч/g, 'щ'],
  [/[бфпв]/g, '1'],
  [/[цжкзсг]/g, '2'],
  [/[дтщшч]/g, '3'],
  [/[л]/g, '4'],
  [/[мн]/g, '5'],
  [/[р]/g, '6'],
] as Array<[RegExp, string]>

var soundex = function (word: string) {
  var result = word.toLowerCase()
  soundex_rules.forEach(function (rule) {
    result = result.replace(rule[0], rule[1])
  })
  return result
}

export { soundex_rules, soundex }
