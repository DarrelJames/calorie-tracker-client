import api from '../apis/api'
import session from '../apis/session'
import edamam from '../apis/edamam'
import history from '../history'
import {
  SIGN_UP,
  LOG_IN,
  LOG_OUT,
  // CREATE_ENTRY,
  // UPDATE_ENTRY,
  // DELETE_ENTRY,
  FETCH_LOGS,
  SEARCH_FOOD,
  SEARCHING_FOOD,
  FETCH_GOAL,
  SAVE_GOAL,
  SELECT_LOG
} from './types'

export const signUp = formValues => async dispatch => {
  const response = await session.post('/signup', {user: { ...formValues }})
  const token = response.headers.authorization.split(' ')[1]

  localStorage.setItem('token', token)
  dispatch({ type: SIGN_UP, payload: token})
  history.push('/')
}

export const logIn = formValues => async dispatch => {
  const response = await session.post('/login', {user: { ...formValues }})
  const token = response.headers.authorization.split(' ')[1]

  localStorage.setItem('token', token)
  dispatch({ type: LOG_IN, payload: token})
  history.push('/')
}

export const logOut = () => async (dispatch) => {
  await api.delete('/logout')

  dispatch({ type: LOG_OUT})
}

export const searchFood = searchTerm => async (dispatch) => {
  dispatch({ type: SEARCHING_FOOD})
  const response = await edamam.get('',{
    params: {

      'app_id': process.env.REACT_APP_EDAMAM_ID,
      'app_key': process.env.REACT_APP_EDAMAM_KEY,
      ingr: searchTerm[0]
  }})


  dispatch({ type: SEARCH_FOOD, payload: response.data.hints})
}

export const createEntry = values => async (dispatch,getState) => {

  // const response = await api.post('/entries', {entry: {...values}})

  // dispatch({ type: CREATE_ENTRY})
}

export const fetchLogs = () => async dispatch => {
  const response = await api.get('/logs')

  dispatch({type: FETCH_LOGS, payload: response.data})
}

export const selectLog = (index) => (dispatch, getState) => {  
  const selected_log = getState().logs.logs[index]

  dispatch({ type: SELECT_LOG, payload: selected_log })
}

export const fetchGoal = () => async dispatch => {
  const response = await api.get('/goals')

  dispatch({ type: FETCH_GOAL, payload: response.data})
}

export const saveGoal = (goalValues, id) => async dispatch => {
  const response = await api.patch(`/goals/${id}`, goalValues)

  dispatch({ type: SAVE_GOAL, payload: response.data})

}
