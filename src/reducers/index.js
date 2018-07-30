import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import courseReducer from './reducer_course';


const rootReducer = combineReducers({
  form: formReducer,
  courses: courseReducer
});

export default rootReducer;
