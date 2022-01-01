"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
const StringRef_1 = __importDefault(require("../StringRef"));
describe('StringRef', () => {
    it('store value as string', () => {
        const value = new StringRef_1.default(100);
        expect(value.val).toBe('100');
    });
    it('store value', () => {
        const value = new StringRef_1.default({});
        expect(value.val).toBe('[object Object]');
    });
    it('matches value', () => {
        const s1 = new StringRef_1.default('привет');
        const res = s1.match(/привет/gi);
        expect(!res).toBe(false);
        expect(res === null || res === void 0 ? void 0 : res[0]).toBe('привет');
    });
    it('replaces and check if it is make any change', () => {
        const s1 = new StringRef_1.default('привет');
        const res = s1.stemmed(/привет/gi, 'пока');
        expect(res).toBe(true);
        expect(s1.val).toBe('пока');
    });
});
//# sourceMappingURL=StringRef.test.js.map