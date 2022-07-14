import { configureStore } from '@reduxjs/toolkit'
import postSlice from './reducers/postSlice'
import usersSlice from './reducers/usersSlice'

export const store = configureStore({
  reducer: {
    posts: postSlice,
    users: usersSlice
    
  }
})