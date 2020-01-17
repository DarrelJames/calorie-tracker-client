import api from '../apis/api'
import {
  SIGN_UP,
  LOG_IN,
  CREATE_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  FETCH_LOG
} from './types'

export const signUp = formValues => async dispatch => {
  const response = await api.post('/signup', {user: { ...formValues }})
  const token = response.headers.authorization.split(' ')[1]

  dispatch({ type: SIGN_UP, payload: token})
}
