import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../reducers/filterReducer'

const VisibilityFilter = () => {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.filter)

  const getButtonClass = (filter) => {
    return `px-2 py-1 text-sm rounded-full focus:outline-none transition duration-300 ease-in-out ${
      activeFilter === filter
        ? 'bg-blue-500 text-white'
        : 'bg-transparent text-slate-300 border border-gray-300 hover:bg-gray-500'
    }`
  }

  return (
    <div className="custom-devlog-width mx-auto mt-4 flex justify-left space-x-2">
      <button
        onClick={() => dispatch(setFilter('ALL'))}
        className={getButtonClass('ALL')}
      >
        all
      </button>
      <button
        onClick={() => dispatch(setFilter('LOGS'))}
        className={getButtonClass('LOGS')}
      >
        logs
      </button>
      <button
        onClick={() => dispatch(setFilter('BLOGS'))}
        className={getButtonClass('BLOGS')}
      >
        blogs
      </button>
    </div>
  )
}

export default VisibilityFilter
