import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Authorization': localStorage.getItem('token')
  }
})
