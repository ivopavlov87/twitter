import { connect } from 'react-redux';
import { createTweet, updateTweet, clearErrors } from '../../actions/tweet_actions';
import TweetForm from './tweet_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  errors: state.errors.tweet,
})

const mapDispatchToProps = dispatch => ({
  createTweet: tweet => dispatch(createTweet(tweet)),
  updateTweet: tweet => dispatch(updateTweet(tweet)),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetForm);