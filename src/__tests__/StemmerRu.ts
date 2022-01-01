import 'jest'
import StemmerRu from '../StemmerRu'

describe('StemmerRu', () => {
  it('works', () => {
    const stemmer = new StemmerRu()
    expect(stemmer.stemWord('усталость')).toBe('усталост')
    expect(stemmer.stemWord('заперевшись')).toBe('заперевш')
    expect(stemmer.stemWord('поразительнейший')).toBe('поразительн')
    expect(stemmer.stemWord('поразительным')).toBe('поразительн')
    expect(stemmer.stemWord('поразительного')).toBe('поразительн')
    expect(stemmer.stemWord('поразительнее')).toBe('поразительн')
    expect(stemmer.stemWord('проверка')).toBe('проверк')
    expect(stemmer.stemWord('проверкою')).toBe('проверк')
    expect(stemmer.stemWord('проверкой')).toBe('проверк')
    expect(stemmer.stemWord('проверке')).toBe('проверк')
    expect(stemmer.stemWord('проверками')).toBe('проверк')
  })
})
