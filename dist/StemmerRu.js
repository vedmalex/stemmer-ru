"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StringRef_1 = __importDefault(require("./StringRef"));
class StemmerRu {
    constructor() {
        this.VOWEL = /аеиоуыэюя/;
        this.REFLEXIVE = /(с[яь])$/;
        this.ADJECTIVE = /(ее|ие|ые|ое|ими|ыми|ей|ий|ый|ой|ем|им|ым|ом|его|ого|еых|ую|юю|ая|яя|ою|ею)$/;
        this.RVRE = /^(.*?[аеиоуыэюя])(.*)$/;
        this.NOUN = /(а|ев|ов|ие|ье|е|иями|ями|ами|еи|ии|и|ией|ей|ой|ий|й|и|ы|ь|ию|ью|ю|ия|ья|я)$/;
        this.DERIVATIONAL = /[^аеиоуыэюя][аеиоуыэюя]+[^аеиоуыэюя]+[аеиоуыэюя].*ость?$/;
    }
    perfectiveGroungDelete(str) {
        const GR1 = /(ив|ивши|ившись|ыв|ывши|ывшись)$/;
        if (str.stemmed(GR1, '')) {
            return true;
        }
        const GR2 = /[ая](в|вши|вшись)$/;
        const GR2Delete = /(в|вши|вшись)$/;
        if (str.match(GR2)) {
            if (str.stemmed(GR2Delete, '')) {
                return true;
            }
        }
        return false;
    }
    PARTICIPLEDelete(str) {
        const GR1 = /(ивш|ывш|ующ)$/;
        if (str.stemmed(GR1, '')) {
            return true;
        }
        const GR2 = /[ая](ем|нн|вш|ющ|щ)$/;
        const GR2Delete = /(ем|нн|вш|ющ|щ)$/;
        if (str.match(GR2)) {
            if (str.stemmed(GR2Delete, '')) {
                return true;
            }
        }
        return false;
    }
    VERBDelete(str) {
        const GR1 = /(ила|ыла|ена|ейте|уйте|ите|или|ыли|ей|уй|ил|ыл|им|ым|ены|ить|ыть|ишь|ую|ю)$/;
        if (str.stemmed(GR1, '')) {
            return true;
        }
        const GR2 = /[ая](ла|на|ете|йте|ли|й|л|ем|н|ло|но|ет|ют|ны|ть|ешь|нно)$/;
        const GR2Delete = /(ла|на|ете|йте|ли|й|л|ем|н|ло|но|ет|ют|ны|ть|ешь|нно)$/;
        if (str.match(GR2)) {
            if (str.stemmed(GR2Delete, '')) {
                return true;
            }
        }
        return false;
    }
    stemWord(_str) {
        let result;
        const lcStr = _str.toLowerCase();
        const str = lcStr.replace(/ё/g, 'е');
        const p = this.RVRE.exec(str);
        if (p) {
            let [, start, str] = p;
            if (str) {
                const RV = new StringRef_1.default(str);
                if (!this.perfectiveGroungDelete(RV)) {
                    RV.stemmed(this.REFLEXIVE, '');
                    if (RV.stemmed(this.ADJECTIVE, '')) {
                        this.PARTICIPLEDelete(RV);
                    }
                    else if (!this.VERBDelete(RV)) {
                        RV.stemmed(this.NOUN, '');
                    }
                }
                RV.stemmed(/и$/, '');
                if (RV.match(this.DERIVATIONAL)) {
                    RV.stemmed(/ость?$/, '');
                }
                if (!RV.stemmed(/ь$/, '')) {
                    RV.stemmed(/ейше?/, '');
                    RV.stemmed(/нн$/, 'н');
                }
                result = start + RV;
            }
        }
        return result;
    }
}
exports.default = StemmerRu;
//# sourceMappingURL=StemmerRu.js.map