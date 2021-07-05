import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {

    // only display links if a user is logged in
    if (props.currentUser){
      return (
        <div>
          Welcome {props.currentUser.username}
          <br />
          <Link to={`/feed`}>Feed</Link>
          &nbsp;
          <Link to={`/tweets/new`}>New Tweet</Link>
          &nbsp;
          <button onClick={props.logout}>Logout</button>
        </div>
      );
    }

    // if no user is logged in return nothing => empty div
    return (
      <div></div>
    )
}

export default NavBar;