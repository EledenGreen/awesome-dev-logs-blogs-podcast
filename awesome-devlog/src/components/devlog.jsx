import { useSelector } from 'react-redux'

const Devlog = () => {
  const devlogs = useSelector((state) => state.devlogs)
  console.log(devlogs)
  return (
    <div className="p-4">
      {devlogs.map((devlog) => (
        <a href={devlog.url} key={devlog.id}>
          <ul className="mb-4 p-4 border rounded shadow-sm bg-stone-600 transition duration-300 ease-in-out transform hover:bg-zinc-500 hover:translate-y-1">
            <li className="font-semibold text-slate-100 text-lg mb-2">
              Game: {devlog.gameName}
            </li>
            <li className="text-gray-300">Dev: {devlog.gameDev}</li>
          </ul>
        </a>
      ))}
    </div>
  )
}

export default Devlog
