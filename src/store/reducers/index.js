import { combineReducers } from 'redux';
import postsReducer from './posts';
import weeksReducer from './weeks';

export default combineReducers({
  posts: postsReducer,
  weeks: weeksReducer, 
}
)
