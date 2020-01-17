import api from '../apis/api'
import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
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

export const logIn = formValues => async dispatch => {
  const response = await api.post('/login', {user: { ...formValues }})
  const token = response.headers.authorization.split(' ')[1]

  dispatch({ type: LOG_IN, payload: token})
}

export const logOut = () => async (dispatch, getState) => {
  console.log(getState());
  const response = await api.delete('/logout', {headers: { 'Authorization': `Bearer ${getState().auth.token}`}} )
  
  dispatch({ type: LOG_OUT})
}
