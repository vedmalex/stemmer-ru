"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const StemmerRu_1 = __importDefault(require("../StemmerRu"));
describe('StemmerRu', () => {
    it('works', () => {
        const stemmer = new StemmerRu_1.default();
        expect(stemmer.stemWord('усталость')).toBe('усталост');
        expect(stemmer.stemWord('заперевшись')).toBe('заперевш');
        expect(stemmer.stemWord('поразительнейший')).toBe('поразительн');
        expect(stemmer.stemWord('поразительным')).toBe('поразительн');
        expect(stemmer.stemWord('поразительного')).toBe('поразительн');
        expect(stemmer.stemWord('поразительнее')).toBe('поразительн');
        expect(stemmer.stemWord('проверка')).toBe('проверк');
        expect(stemmer.stemWord('проверкою')).toBe('проверк');
        expect(stemmer.stemWord('проверкой')).toBe('проверк');
        expect(stemmer.stemWord('проверке')).toBe('проверк');
        expect(stemmer.stemWord('проверками')).toBe('проверк');
    });
});
//# sourceMappingURL=StemmerRu.js.map