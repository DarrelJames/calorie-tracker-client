import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer'
import edamamReducer from './edamamReducer'
import logReducer from './logReducer'
import goalReducer from './goalReducer'


export default combineReducers({
  auth: authReducer,
  form: formReducer,
  edamam: edamamReducer,
  logs: logReducer,
  goal: goalReducer
});
