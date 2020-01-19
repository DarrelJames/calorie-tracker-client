import { SEARCH_FOOD } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_FOOD:
      return { ...state, foods: action.payload }

    default:
      return state
  }
}
