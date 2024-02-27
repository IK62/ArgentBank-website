const initialState = { username: '', password: '' }

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'updateUsername':
      return {
        ...state,
        username: action.payload,
      }
    case 'updatePassword':
      return {
        ...state,
        password: action.payload,
      }
    default:
      return state
  }
}

export default counterReducer
