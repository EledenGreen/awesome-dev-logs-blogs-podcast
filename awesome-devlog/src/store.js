import { configureStore } from '@reduxjs/toolkit'
import devReducer from './reducers/devReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    devlogs: devReducer,
    filter: filterReducer,
  },
})

export default store
