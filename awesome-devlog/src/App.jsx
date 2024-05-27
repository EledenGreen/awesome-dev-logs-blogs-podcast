import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initialDevlogs } from './reducers/devReducer'
import Devlog from './components/devlog'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialDevlogs())
  }, [])

  return (
    <>
      <Devlog />
    </>
  )
}

export default App
