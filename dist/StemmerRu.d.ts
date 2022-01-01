import StringRef from './StringRef';
export default class StemmerRu {
    VOWEL: RegExp;
    REFLEXIVE: RegExp;
    ADJECTIVE: RegExp;
    RVRE: RegExp;
    NOUN: RegExp;
    DERIVATIONAL: RegExp;
    constructor();
    perfectiveGroungDelete(str: StringRef): boolean;
    PARTICIPLEDelete(str: StringRef): boolean;
    VERBDelete(str: StringRef): boolean;
    stemWord(_str: string): string | undefined;
}
//# sourceMappingURL=StemmerRu.d.ts.map