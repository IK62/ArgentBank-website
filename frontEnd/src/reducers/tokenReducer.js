const token = localStorage.getItem('token')

const initialState = token ? token : false

function tokenReducer(state = initialState, action) {
  if (action.type === 'updateToken') {
    return action.payload
  }
  return state
}

export default tokenReducer
