const users = localStorage.getItem( 'users' ) || false

const initialState = users ? users : {}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'updateUser':
      return action.payload
    case 'deleteUser':
      return initialState
    case 'updateUserName':
      return {...state, userName: action.payload}
    default:
      return state
  }
}

export default userReducer
