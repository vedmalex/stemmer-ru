"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.soundex = exports.soundex_rules = void 0;
var soundex_rules = [
    [/[йуеёыахоэяиюьъ]/g, ''],
    [/[с]?тч/g, 'щ'],
    [/[бфпв]/g, '1'],
    [/[цжкзсг]/g, '2'],
    [/[дтщшч]/g, '3'],
    [/[л]/g, '4'],
    [/[мн]/g, '5'],
    [/[р]/g, '6'],
];
exports.soundex_rules = soundex_rules;
var soundex = function (word) {
    var result = word.toLowerCase();
    soundex_rules.forEach(function (rule) {
        result = result.replace(rule[0], rule[1]);
    });
    return result;
};
exports.soundex = soundex;
//# sourceMappingURL=soundex.js.map