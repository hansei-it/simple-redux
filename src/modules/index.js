import {combineReducers} from 'redux';
import counter from './counter';
import people from './people';

const rootReducer = combineReducers({
  counter
});

export default rootReducer;