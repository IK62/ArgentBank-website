const initialState = localStorage.getItem('users') ? true : false

function tokenReducer(state = initialState, action) {
  if (action.type === 'updateToken' && typeof(action.payload) === 'boolean') {
    return action.payload
  }
  return state
}

export default tokenReducer
