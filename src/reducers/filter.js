import { SET_MANUFACTURER } from '../actions'

const filter = (state = {}, action) => {
  switch (action.type) {
    case SET_MANUFACTURER:
      return action.payload
    default:
      return state
  }
}

export default filter
