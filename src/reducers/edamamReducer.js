import { SEARCH_FOOD, SEARCHING_FOOD } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCHING_FOOD:
      return { ...state, searching: true}

    case SEARCH_FOOD:
      return { ...state, foods: action.payload, searching: false }

    default:
      return state
  }
}
