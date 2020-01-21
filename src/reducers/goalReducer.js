import { FETCH_GOAL, SAVE_GOAL } from '../actions/types'

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action ) => {
  switch (action.type) {
    case FETCH_GOAL:
      return { ...state , goal: action.payload}
    case SAVE_GOAL:
      return { ...state, goal: action.payload}
    default:
      return state
  }
}
