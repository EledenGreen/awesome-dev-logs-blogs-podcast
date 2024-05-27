import { useSelector } from 'react-redux'

const Devlog = () => {
  const devlogs = useSelector((state) => state.devlogs)
  console.log(devlogs)
  return (
    <div>
      {devlogs.map((devlog) => (
        <ul key={devlog.id}>
          <li>{devlog.gameName}</li>
          <li>{devlog.gameDev}</li>
        </ul>
      ))}
    </div>
  )
}

export default Devlog
