import { combineReducers } from 'redux';
import postsReducer from './posts';
import weeksReducer from './weeks';
import fetchReducer from './fetching';

export default combineReducers({
  posts: postsReducer,
  weeks: weeksReducer, 
  loadingResource: fetchReducer, 
}
)
