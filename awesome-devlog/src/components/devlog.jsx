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
        <div key={devlog.id} className="custom-devlog-width mx-auto mb-4">
          <a
            href={devlog.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 p-2"
          >
            <ul className="card p-2 border border-stone-800 rounded shadow-sm bg-stone-800 ">
              <li className="font-semibold text-slate-100 text-lg mb-2">
                {devlog.name}
              </li>
              <li className="text-gray-300">Dev: {devlog.dev}</li>
              <li className="text-gray-300">Type: {devlog.type}</li>
            </ul>
          </a>
        </div>
      ))}
    </div>
  )
}

export default Devlog
