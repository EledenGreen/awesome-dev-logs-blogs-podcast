import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initialDevlogs } from './reducers/devReducer'
import Devlog from './components/devlog'
import './index.css'
import Menu from './components/menu'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialDevlogs())
  }, [])

  return (
    <>
      <Menu />
      <Devlog />
    </>
  )
}

export default App
