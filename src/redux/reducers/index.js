import { combineReducers } from 'redux';
import scores from './scores';
import history from './history';

export default combineReducers({
  history,
  scores,
});
