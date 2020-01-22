import { FETCH_LOGS, SELECT_LOG } from '../actions/types'
import moment from 'moment'

const INITIAL_STATE = {
  logs: [],
  date: moment(),
  current_log: 0,
  selected_log: {}
}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case FETCH_LOGS:
      return { ...state , logs: action.payload}
    case SELECT_LOG:
      return { ...state, selected_log: action.payload}

    default:
      return state
  }
}
