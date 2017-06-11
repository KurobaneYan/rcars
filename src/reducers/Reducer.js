import { createStore } from 'redux'

const initialState = 0

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default: return state
  }
}

const store = createStore(reducer)

console.log(store.getState())
store.dispatch({ type: 'INCREMENT' })
console.log(store.getState())

export default reducer
