import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initialDevlogs } from './reducers/devReducer'
import Devlog from './components/devlog'
import './index.css'
import Menu from './components/menu'
import VisibilityFilter from './components/filter'
import Footer from './components/footer'
import NavigationBar from './components/navigationBar'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initialDevlogs())
  }, [])

  return (
    <>
      <NavigationBar />
      <Menu />
      <VisibilityFilter />
      <Devlog />
      <Footer />
    </>
  )
}

export default App
