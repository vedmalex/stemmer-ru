"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StringRef {
    constructor(v) {
        this.val = v.toString();
    }
    toString() {
        return this.val;
    }
    stemmed(re, to) {
        const orig = this.val;
        this.val = this.val.replace(re, to);
        return orig !== this.val;
    }
    match(re) {
        return this.val.match(re);
    }
}
exports.default = StringRef;
//# sourceMappingURL=StringRef.js.map