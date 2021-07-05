import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import TweetFeedItem from './tweet_feed_item';

const TweetFeed = (props) => {

  useEffect(() => {
    props.fetchTweets();
  }, [props.match.path])

  if(!props.tweets){
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className="feed-container">
      {Object.values(props.tweets).sort((a, b) => b.id - a.id).map((tweet) => {
        if ( tweet.retweet_id === null ) {
          return (
            <div key={`tweet-${tweet.id}`}>
              <TweetFeedItem
                tweet={tweet}
                currentUser={props.currentUser}
                fetchTweet={props.fetchTweet}
                updateTweet={props.updateTweet}
                refetch={props.fetchTweets}
                clearErrors={props.clearErrors}
                createTweet={props.createTweet}
              />
            </div>
          )
        }
        if ( tweet.retweet_id !== null ) {
          return (
            <div key={`tweet-${tweet.id}`}>
              {tweet.author} Retweeted:
              <TweetFeedItem
                tweet={tweet}
                currentUser={props.currentUser}
                fetchTweet={props.fetchTweet}
                updateTweet={props.updateTweet}
                refetch={props.fetchTweets}
                clearErrors={props.clearErrors}
                createTweet={props.createTweet}
              />
            </div>
          )
        }
      })}
    </div>
  );
}

export default withRouter(TweetFeed)