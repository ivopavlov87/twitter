import React, { useState, useEffect } from 'react';

const TweetShow = (props) => {
  const [author, setAuthor] = useState()

  useEffect(() => {
    if (props.tweet.retweet_id !== null){
      const retweet_id = props.tweet.retweet_id

      props.fetchTweet(retweet_id).then(res => (
        setAuthor(res.tweet.author)
      ))
    }
  }, [])

  const handleRetweet = (e) => {
    e.preventDefault();

    const Retweet = new FormData();
    Retweet.append("tweet[body]", `This is a retweet of Tweet ${props.tweet.retweet_id || props.tweet.id}`);
    Retweet.append("tweet[user_id]", props.currentUser.id);
    Retweet.append("tweet[retweet_id]", props.tweet.retweet_id || props.tweet.id);

    props.createTweet(Retweet).then(response => {
      if (!response.errors){
        props.clearErrors();
        props.history.push(`/feed`)
      }
    })
  }

  return (
    <div className="show-item">
      {author || props.tweet.author}: {props.tweet.body}
      <br />
      <button onClick={props.likeButtonClick}>
        {props.likes.includes(props.currentUser.id) ? "Unlike" : "Like"}
      </button>{" "}{props.likes.length - 1} likes{" "}
      <button onClick={handleRetweet}>Retweet</button>
    </div>
  )
}

export default TweetShow