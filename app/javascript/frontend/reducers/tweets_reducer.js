import {
  RECEIVE_TWEET,
  RECEIVE_TWEETS
} from '../actions/tweet_actions';

const TweetsReducer = (
  state = {},
  action
) => {
  let newState;
  switch (action.type) {
    case RECEIVE_TWEET:
      newState = { [action.tweet.id]: action.tweet };
      return Object.assign({}, state, newState);
    case RECEIVE_TWEETS:
      return action.tweets;
    default:
      return state
  }
}

export default TweetsReducer;