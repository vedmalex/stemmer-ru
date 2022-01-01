import 'jest'
import StringRef from '../StringRef'

describe('StringRef', () => {
  it('store value as string', () => {
    const value = new StringRef(100)
    expect(value.val).toBe('100')
  })
  it('store value', () => {
    const value = new StringRef({})
    expect(value.val).toBe('[object Object]')
  })
  it('matches value', () => {
    const s1 = new StringRef('привет')
    const res = s1.match(/привет/gi)
    expect(!res).toBe(false)
    expect(res?.[0]).toBe('привет')
  })
  it('replaces and check if it is make any change', () => {
    const s1 = new StringRef('привет')
    const res = s1.stemmed(/привет/gi, 'пока')
    expect(res).toBe(true)
    expect(s1.val).toBe('пока')
  })
})
