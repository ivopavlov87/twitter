import { connect } from 'react-redux';
import TwitterLanding from './main';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TwitterLanding);