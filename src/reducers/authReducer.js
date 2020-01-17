import { SIGN_UP, LOG_IN, LOG_OUT } from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  token: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, isSignedIn: true, token: action.payload }
    case LOG_IN:
      return { ...state, isSignedIn: true, token: action.payload }
    case LOG_OUT:
      return { ...state, isSignedIn: null, token: null }
    default:
      return state
  }
}
