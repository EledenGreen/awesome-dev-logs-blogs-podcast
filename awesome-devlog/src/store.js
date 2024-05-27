import { configureStore } from '@reduxjs/toolkit'
import devReducer from './reducers/devReducer'
import { setFilter } from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    devlogs: devReducer,
    filter: setFilter,
  },
})

export default store
