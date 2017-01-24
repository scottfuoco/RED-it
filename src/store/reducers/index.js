import { combineReducers } from 'redux';
import postsReducer from './posts';
import postFilterReducer from './postFilter';
import weeksReducer from './weeks';

export default combineReducers({
  posts: postsReducer,
  weeks: weeksReducer, 
  postFilter: postFilterReducer,
}
)
