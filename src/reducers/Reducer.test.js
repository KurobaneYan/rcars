import reducer from './Reducer'

describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'T' })).toEqual(0)
  })

  it('increments counter', () => {
    expect(reducer(0, { type: 'INCREMENT' })).toEqual(1)
    expect(reducer(1, { type: 'INCREMENT' })).toEqual(2)
    expect(reducer(1, { type: 'UNKNOWN_TYPE' })).toEqual(1)
  })

  it('decrements counter', () => {
    expect(reducer(2, { type: 'DECREMENT' })).toEqual(1)
    expect(reducer(1, { type: 'DECREMENT' })).toEqual(0)
  })
})
