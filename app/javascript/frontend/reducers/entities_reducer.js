import { combineReducers } from 'redux';

import users from './users_reducer';
import tweets from './tweets_reducer';

export default combineReducers({
  users,
  tweets
});