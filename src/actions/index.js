import api from '../apis/api'
import edamam from '../apis/edamam'
import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  // CREATE_ENTRY,
  // UPDATE_ENTRY,
  // DELETE_ENTRY,
  // FETCH_LOG,
  SEARCH_FOOD
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
  await api.delete('/logout', {headers: { 'Authorization': `Bearer ${getState().auth.token}`}} )

  dispatch({ type: LOG_OUT})
}

export const searchFood = searchTerm => async (dispatch) => {

  const response = await edamam.get('',{
    params: {

      'app_id': process.env.REACT_APP_EDAMAM_ID,
      'app_key': process.env.REACT_APP_EDAMAM_KEY,
      ingr: searchTerm[0]
  }})


  dispatch({ type: SEARCH_FOOD, payload: response.data.hints})
}
