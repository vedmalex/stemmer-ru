export default class StringRef {
  val: string
  constructor(v: any) {
    this.val = v.toString()
  }

  toString() {
    return this.val
  }

  stemmed(re: string | RegExp, to: string) {
    const orig = this.val
    this.val = this.val.replace(re, to)
    return orig !== this.val
  }

  match(re: RegExp) {
    return this.val.match(re)
  }
}
