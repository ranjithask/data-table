import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  data: DataReducer,
});

export default rootReducer;
