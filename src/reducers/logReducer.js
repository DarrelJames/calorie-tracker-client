import {
  FETCH_LOGS,
  FETCH_LOG_START,
  FETCH_LOG_SUCCESS,
  CREATE_ENTRY,
  DELETE_ENTRY,
  SELECT_DAY,
  UPDATE_ENTRY
} from '../actions/types'
import _ from 'lodash'
import moment from 'moment'


const INITIAL_STATE = {
  date: moment(new Date()).format('YYYY-MM-DD'),
  fetchingLog: false,
  logSet: false
}



export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case FETCH_LOGS:
      return { ...state , ..._.mapKeys(action.payload, 'date')}
    case FETCH_LOG_START:
      return { ...state, fetchingLog: true, date: action.payload}
    case FETCH_LOG_SUCCESS:
      return { ...state, [action.payload.date]: action.payload,logSet: true, fetchingLog: false }
    case CREATE_ENTRY:
      return { ...state, [action.payload.date]: action.payload }
    case UPDATE_ENTRY:
      const type = action.payload.category
      return {...state, [state.date]: { ...state[state.date], [type]: state[state.date][type].map(entry => entry.id === action.payload.id ? action.payload : entry)}}

    case DELETE_ENTRY:
      return {...state, [state.date]: { ...state[state.date], entries: state[state.date].entries.filter(entry => entry.id !== action.payload)}}


    case SELECT_DAY:
      return { ...state, date: action.payload, logSet: false}


    default:
      return state
  }
}
