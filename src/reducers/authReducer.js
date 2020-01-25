import {
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_OUT
} from '../actions/types'

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  status: 'idle',
  message: '',
  errorStatusCode: null,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_UP_START:
      return { ...state, status: 'loading' }
    case SIGN_UP_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case SIGN_UP_FAILURE:
      return { ...state, status: 'error', message: action.payload }

    case LOG_IN_START:
      return { ...state, status: 'loading'}
    case LOG_IN_SUCCESS:
      return { ...state, ...INITIAL_STATE }
    case LOG_IN_FAILURE:
      return { ...state, status: 'error', message: action.payload.data, errorStatusCode: action.payload.status }

    case LOG_OUT:
      return { ...state, token: null }
    default:
      return state
  }
}
