const users = JSON.parse(localStorage.getItem( 'users' )) || false

const initialState = users ? users : {}

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'updateUser':
      return action.payload
    case 'deleteUser':
      return initialState
    default:
      return state
  }
}

export default userReducer
