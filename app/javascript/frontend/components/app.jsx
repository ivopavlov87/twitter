import React from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav/navbar_container';
import MainPageContainer from './main/main_page_container';
// import UserProfile from './profile/user_profile_container';
import TweetForm from './tweets/tweet_form_container';
// import PostShow from './posts/post_show_container';
import TweetFeedContainer from './tweets/tweet_feed_container';

import userLoggedIn from './test/test';

const App = () => (
  <div>
    <NavBarContainer />
    <div>
      <Switch>
        <AuthRoute exact path="/" component={MainPageContainer} />
        <ProtectedRoute exact path="/loggedInSuccess" component={userLoggedIn} />
        <ProtectedRoute exact path="/feed" component={TweetFeedContainer} />
        <ProtectedRoute exact path="/tweets/new" component={TweetForm} />
      </Switch>
    </div>
  </div>
)

export default App;