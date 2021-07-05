import {
  RECEIVE_TWEET_ERRORS,
  RECEIVE_TWEET,
  CLEAR_ERRORS,
} from "../actions/tweet_actions";

const _nullErrors = [];

export default (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_TWEET_ERRORS:
      return action.errors;
    case RECEIVE_TWEET:
      return _nullErrors;
    case CLEAR_ERRORS:
      return _nullErrors;
    default:
      return state;
  }
};
