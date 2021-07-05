import { connect } from 'react-redux';
import { fetchTweet, fetchTweets, createTweet, updateTweet, clearErrors } from '../../actions/tweet_actions';

import TweetFeed from './tweet_feed';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  tweets: state.entities.tweets
});

const mapDispatchToProps = dispatch => ({
  fetchTweet: id => dispatch(fetchTweet(id)),
  createTweet: tweet => dispatch(createTweet(tweet)),
  updateTweet: id => dispatch(updateTweet(id)),
  fetchTweets: () => dispatch(fetchTweets()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetFeed)