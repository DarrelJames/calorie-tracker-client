import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer'
import edamamReducer from './edamamReducer'

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  edamam: edamamReducer
});
