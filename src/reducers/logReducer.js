import { FETCH_LOGS, FETCH_LOG_START, FETCH_LOG_SUCCESS, CREATE_ENTRY, SELECT_DAY } from '../actions/types'
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

    case SELECT_DAY:
      return { ...state, date: action.payload, logSet: false}


    default:
      return state
  }
}
