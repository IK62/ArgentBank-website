import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../reducers/form/formReducer'
import userReducer from '../reducers/userData/userReducer'
import tokenReducer from '../reducers/tokenReducer'

export const store = configureStore({
  reducer: {
    form: formReducer,
    users: userReducer,
    isToken: tokenReducer,
  },
})