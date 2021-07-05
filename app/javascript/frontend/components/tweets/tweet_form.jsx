import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const TweetForm = (props) => {

  const [tweetBody, setTweetBody] = useState("")

  // error rendering component
  const RenderErrors = (props) => {
    return (
      <ul>
        {Object.keys(props.errors).map((error, i) => (
          <li key={`error-${i}`}>{props.errors[error]}</li>
        ))}
      </ul>
    );
  }

  const handleTweetSubmit = (e) => {
    e.preventDefault();

    const newTweet = new FormData();
    newTweet.append("tweet[body]", tweetBody);
    newTweet.append("tweet[user_id]", props.currentUser.id);

    props.createTweet(newTweet).then(response => {
      if (!response.errors){
        props.clearErrors();
        props.history.push(`/feed`)
      }
    })
  }

  // conditionally render what is on the submit button
  let submitButtonText = "Create New Tweet";

  return (
    <div>
      <form onSubmit={handleTweetSubmit}>
        <label>
          Body:
          <br />
          <textarea
            rows="5"
            cols="55"
            maxLength="140"
            value={tweetBody}
            placeholder="Add a body (Maximum 140 characters)"
            onChange={(e) => setTweetBody(e.target.value)}
          />
          <br />
          {tweetBody ? tweetBody.length : "0"}/140 characters
        </label>
        <br />
        <input type="submit" value={submitButtonText} />
      </form>
      <RenderErrors errors={props.errors} />
    </div>
  );

}

export default withRouter(TweetForm);