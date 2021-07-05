import React, { useState, useEffect } from 'react';
import TweetShow from './tweet_show';
import { withRouter } from 'react-router-dom';

const TweetFeedItem = (props) => {
  const [likes, setLikes] = useState(props.tweet.likes)
  const [retweet, setRetweet] = useState()

  useEffect(() => {
    if (props.tweet.retweet_id !== null){
      const retweet_id = props.tweet.retweet_id

      props.fetchTweet(retweet_id).then(res => (
        setRetweet(res.tweet)
      ))
    }
  }, [])

  const likeButtonClick = (e) => {
    e.preventDefault();

    let tmp = likes;
    if (!tmp.includes(props.currentUser.id)) {
      tmp.push(props.currentUser.id)
      setLikes(tmp)
      console.log(likes)
      console.log(likes.length)
    } else if (tmp.includes(props.currentUser.id)) {
      let idx = tmp.indexOf(props.currentUser.id)
      tmp.splice(idx, 1)
      setLikes(tmp)
      console.log(likes)
      console.log(likes.length)
    }

    const updatedTweet = props.tweet;
      updatedTweet.likes = likes;

      delete updatedTweet.author

      props.updateTweet(updatedTweet).then(response => {
        if (!response.errors){
          props.clearErrors();
        }
      })
  }

  console.log('retweet', retweet)

  return (
    <TweetShow 
      tweet={retweet || props.tweet}
      // tweetAuthor={retweet ? retweet.author : props.tweet.author}
      likeButtonClick={likeButtonClick}
      likes={likes}
      currentUser={props.currentUser}
      createTweet={props.createTweet}
      fetchTweet={props.fetchTweet}
    />
  );
}

export default withRouter(TweetFeedItem);