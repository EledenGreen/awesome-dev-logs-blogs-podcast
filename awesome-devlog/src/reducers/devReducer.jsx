import { createSlice } from '@reduxjs/toolkit'
import devService from '../services/devlogs'

const devSlice = createSlice({
  name: 'devlogs',
  initialState: [],
  reducers: {
    setDevlogs(state, action) {
      return action.payload
    },
  },
})

export const { setDevlogs } = devSlice.actions

export const initialDevlogs = () => {
  return async (dispatch) => {
    const devlogs = await devService.getAll()
    console.log(devlogs)
    dispatch(setDevlogs(devlogs))
  }
}

export default devSlice.reducer
