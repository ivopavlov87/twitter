import * as APIUtil from '../util/tweet_api_util';

export const RECEIVE_TWEET = 'RECEIVE_TWEET';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';
export const RECEIVE_TWEET_ERRORS = 'RECEIVE_TWEET_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveTweet = tweet => ({
  type: RECEIVE_TWEET,
  tweet
});

const receiveTweets = tweets => ({
  type: RECEIVE_TWEETS,
  tweets
});

export const receiveErrors = errors => ({
  type: RECEIVE_TWEET_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
  errors: []
});

export const fetchTweet = id => dispatch => (
  APIUtil.fetchTweet(id).then(tweet => dispatch(receiveTweet(tweet)))
    .catch(err => console.log(err))
);

export const fetchTweets = () => dispatch => (
  APIUtil.fetchTweets().then(tweets => dispatch(receiveTweets(tweets)))
    .catch(err => console.log(err))
);

export const createTweet = tweet => dispatch => (
  APIUtil.createTweet(tweet).then(tweet => dispatch(receiveTweet(tweet)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateTweet = tweet => dispatch => (
  APIUtil.updateTweet(tweet).then(tweet => dispatch(receiveTweet(tweet)),
    err => dispatch(receiveErrors(err.responseJSON)))
);