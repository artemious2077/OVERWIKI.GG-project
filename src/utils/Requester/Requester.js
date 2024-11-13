import axios from 'axios'
import { APIKEY, BASE_URL } from '../helpers/constants'

export const Requester = axios.create({
  baseURL: BASE_URL,
  headers: {
    apikey: APIKEY,
  },
})

// в интерсепторе запросов необходимо возвращать объект конфигурации запроса, чтобы он мог быть обработан дальше.
// В данном примере, добавляются заголовки Accept-Language и apikey в объект конфигурации запроса и затем
// всё возобновляется с помощью оператора return. Это позволяет axios продолжить обработку запроса с
// обновленной конфигурацией.
Requester.interceptors.request.use((config) => {
  config.headers['Accept-Language'] = localStorage.getItem('language')
  config.headers['apikey'] = APIKEY
  return config
})
