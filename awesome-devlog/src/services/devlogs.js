import axios from 'axios'

const baseurl = 'http://localhost:3001/devlogs'

const getAll = async () => {
  console.log('INSIDE')
  const response = await axios.get(baseurl)
  console.log('---------', response.data)
  return response.data
}

export default { getAll }
