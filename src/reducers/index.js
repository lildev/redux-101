import { combineReducers } from 'redux';
import postListReducer from './postListReducer';

export default combineReducers({
  posts: postListReducer,
  status: null
})