// ------------------------------------
// Constants
// ------------------------------------
export const NAVIGATION_INIT = 'NAVIGATION_INIT'

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk! */
export function navigationInit (items) {
  return dispatch => {
    return dispatch({
      type: NAVIGATION_INIT,
      payload: items
    })
  }
}

export const actions = {
  navigationInit,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [NAVIGATION_INIT]    : (state, action) => {
    return action.payload
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = []
export default function navigationReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
