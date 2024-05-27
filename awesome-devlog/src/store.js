import { configureStore } from '@reduxjs/toolkit'
import devReducer from './reducers/devReducer'

const store = configureStore({
  reducer: {
    devlogs: devReducer,
  },
})

export default store
