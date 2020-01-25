import api from '../apis/api'
import session from '../apis/session'
import edamam from '../apis/edamam'
import history from '../history'
import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT,
  CREATE_ENTRY,
  UPDATE_ENTRY,
  DELETE_ENTRY,
  FETCH_LOGS,
  FETCH_LOG_SUCCESS,
  FETCH_LOG_START,
  SEARCH_FOOD,
  SEARCHING_FOOD,
  FETCH_GOAL,
  SAVE_GOAL,
  SELECT_DAY
} from './types'
import moment from 'moment'

export const signUp = formValues => async dispatch => {
  dispatch( {type: SIGN_UP_START})
  try {
    const response = await session.post('/signup', {user: { ...formValues }})
    console.log(response);
    const token = response.headers.authorization.split(' ')[1]

    dispatch({ type: SIGN_UP_SUCCESS, payload: token})
    localStorage.setItem('token', token)
    history.push('/profile')
  } catch (e) {
      dispatch( { type: SIGN_UP_FAILURE, payload:  e.response.data.errors.detail.user})
  }
}

export const logIn = formValues => async dispatch => {
  dispatch( {type: LOG_IN_START})
  try {
    const response = await session.post('/login', {user: { ...formValues }})
    const token = response.headers.authorization.split(' ')[1]

    localStorage.setItem('token', token)
    dispatch({ type: LOG_IN_SUCCESS, payload: token})
    history.push('/logs')
  } catch (e) {
    dispatch( { type: LOG_IN_FAILURE, payload: e.response})
  }

}

export const logOut = () => async (dispatch) => {
  await api.delete('/logout')

  localStorage.removeItem('token')
  dispatch({ type: LOG_OUT})

  history.push('/login')
}

export const searchFood = searchTerm => async (dispatch) => {
  dispatch({ type: SEARCHING_FOOD})

  const response = await edamam.get('',{
    params: {

      'app_id': process.env.REACT_APP_EDAMAM_ID,
      'app_key': process.env.REACT_APP_EDAMAM_KEY,
      ingr: searchTerm
  }})


  dispatch({ type: SEARCH_FOOD, payload: response.data.hints})
}

export const createEntry = values => async (dispatch,getState) => {
  const response = await api.post('/entries', {log_id: getState().logs[getState().logs.date].id, entry: {...values}})

  dispatch({ type: CREATE_ENTRY, payload: response.data})
  history.push(`/logs/${getState().logs.date}`)
}

export const updateEntry = (entry_id , value) => async dispatch => {
  const response = await api.patch(`/entries/${entry_id}`, {servings: value})
  dispatch({ type: UPDATE_ENTRY, payload: response.data})
}
export const deleteEntry = (entry_id) => async dispatch => {
  await api.delete(`/entries/${entry_id}`)

  dispatch({ type: DELETE_ENTRY, payload: entry_id})
}

export const fetchLogs = () => async dispatch => {
  const response = await api.get('/logs')

  const sortedLogs = response.data.sort((a, b) => new Date(b.date) - new Date(a.date))

  dispatch({type: FETCH_LOGS, payload: sortedLogs})
}
export const fetchLog = (date) => async dispatch => {
  const formattedDate = moment(date).format('YYYY-MM-DD')

  dispatch({ type: FETCH_LOG_START, payload: formattedDate })
  const response = await api.get(`/logs/${formattedDate}`)

  dispatch({type: FETCH_LOG_SUCCESS, payload: response.data})
}

export const selectDay = day => {
  history.push(`/logs/${day}`)
  return {type: SELECT_DAY, payload: day}
}

export const fetchGoal = () => async dispatch => {
  const response = await api.get('/goals')

  dispatch({ type: FETCH_GOAL, payload: response.data})
}

export const saveGoal = (goalValues, id) => async dispatch => {
  const response = await api.patch(`/goals/${id}`, goalValues)

  dispatch({ type: SAVE_GOAL, payload: response.data})

}
