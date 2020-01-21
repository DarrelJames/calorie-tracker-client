import { SIGN_UP, LOG_IN, LOG_OUT } from '../actions/types'

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  error: '',
  errorStatusCode: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, token: action.payload }
    case LOG_IN:
      return { ...state, token: action.payload }
    case LOG_OUT:
      return { ...state, token: null }
    default:
      return state
  }
}
