// ------------------------------------
// Constants
// ------------------------------------
export const GET_VEHICLES_LIST = 'GET_VEHICLES_LIST'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk! */

export const getVehicles = () => {
  return (dispatch, getState) => {
    function apiCall () {
      return fetch(__API__ + 'test', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(response => {
        return response.json()
      }).catch(error => {
        return error
      })
    }

    return apiCall().then(data => {
      dispatch({
        type    : GET_VEHICLES_LIST,
        payload: data.data
      })
    }).catch(error => {
      throw (error)
    })
  }
}

export const actions = {
  getVehicles,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [GET_VEHICLES_LIST]    : (state, action) => {
    return action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function vehiclesReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
