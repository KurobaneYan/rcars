export const REQUEST_CARS = 'REQUEST_CARS'
export const RECEIVE_CARS = 'RECEIVE_CARS'
export const SET_MANUFACTURER = 'SET_MANUFACTURER'

export const setManufacturer = (value) => ({
  type: SET_MANUFACTURER,
  payload: value
})

function requestCars () {
  return {
    type: REQUEST_CARS
  }
}

function receiveCars (json) {
  return {
    type: RECEIVE_CARS,
    cars: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchCars () {
  return dispatch => {
    dispatch(requestCars())
    return fetch('http://localhost:3000/api/cars')
      .then(response => response.json())
      .then(json => dispatch(receiveCars(json)))
  }
}

function shouldFetchCars (state) {
  const cars = state.cars
  if (!cars) {
    return true
  } else if (cars.isFetching) {
    return false
  }
}

export function fetchCarsIfNeeded () {
  return (dispatch, getState) => {
    if (shouldFetchCars(getState())) {
      return dispatch(fetchCars())
    }
  }
}
