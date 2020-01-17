import { SIGN_UP } from '../actions/types'

const INITIAL_STATE = {
  isSignedIn: null,
  token: null
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, isSignedIn: true, token: action.payload }
      
    default:
      return state
  }
}
