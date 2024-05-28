import { useSelector } from 'react-redux'

const Devlog = () => {
  const devlogs = useSelector(({ filter, devlogs }) => {
    if (filter === 'ALL') {
      return devlogs
    }
    return filter === 'LOGS'
      ? devlogs.filter((devlog) => devlog.type === 'logs')
      : devlogs.filter((devlog) => devlog.type === 'blogs')
  })

  console.log(devlogs)
  return (
    <div className="p-4">
      {devlogs.map((devlog) => (
        <a
          href={devlog.url}
          key={devlog.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ul className="custom-devlog-width mx-auto mb-4 p-2 border rounded shadow-sm bg-stone-600 transition duration-300 ease-in-out transform hover:bg-zinc-500 hover:translate-y-1">
            <li className="font-semibold text-slate-100 text-lg mb-2">
              {devlog.name}
            </li>
            <li className="text-gray-300">Dev: {devlog.dev}</li>
            <li className="text-gray-300">Type: {devlog.type}</li>
          </ul>
        </a>
      ))}
    </div>
  )
}

export default Devlog
