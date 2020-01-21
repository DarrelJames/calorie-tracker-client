import { FETCH_LOGS } from '../actions/types'

const INITIAL_STATE = {
  
}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case FETCH_LOGS:
      return { ...state , logs: action.payload}

    default:
      return state
  }
}
