import { FETCH_LOGS, FETCH_LOG } from '../actions/types'
import _ from 'lodash'
import moment from 'moment'

const INITIAL_STATE = {
  date: new Date()  
}

const formatDate = date => {
  return moment(date).format('MM-DD-YYYY')
}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case FETCH_LOGS:
      return { ...state , ..._.mapKeys(action.payload, 'date')}
    case FETCH_LOG:
      return { ...state, [action.payload.date]: action.payload}



    default:
      return state
  }
}
