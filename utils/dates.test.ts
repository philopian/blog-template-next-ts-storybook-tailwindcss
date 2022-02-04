import { getCurrentYear } from './dates'

describe('utils/dates', () => {
  test('should return proper mock year', () => {
    const mockYear = 1999

    jest.spyOn(Date.prototype, 'getDay').mockReturnValue(2)
    jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(`${mockYear}-01-01T00:00:00.000Z`)

    const expected = 1999
    const actual = getCurrentYear()
    expect(actual).toBe(expected)
    jest.restoreAllMocks()
  })

  test('should not return current year', () => {
    const mockYear = 1999

    jest.spyOn(Date.prototype, 'getDay').mockReturnValue(2)
    jest.spyOn(Date.prototype, 'toISOString').mockReturnValue(`${mockYear}-01-01T00:00:00.000Z`)

    const expected = 2000
    const actual = getCurrentYear()
    expect(actual).not.toBe(expected)
    jest.restoreAllMocks()
  })

  test('should actual return current year', () => {
    const now = new Date()
    const expected = Number(now.toISOString().slice(0, 4))
    const actual = getCurrentYear()
    expect(actual).toBe(expected)
  })
})
