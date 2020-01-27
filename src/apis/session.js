import axios from 'axios'
import { config } from './Constants'

const instance = axios.create({
  baseURL: config.API_URL
})


export default instance
