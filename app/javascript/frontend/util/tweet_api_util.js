import csrf_token from "./csrf_token_util";

export const fetchTweet = id => (
  $.ajax({
    method: `GET`,
    url: `/api/tweets/${id}`
  })
)

export const fetchTweets = () => (
  $.ajax({
    method: `GET`,
    url: `/api/tweets`
  })
)

export const createTweet = tweet => {
  return (
    $.ajax({
      method: `POST`,
      url: `/api/tweets`,
      data: tweet,
      headers: csrf_token,
      processData: false,
      contentType: false,
      error: err => console.log(err)
    })
  )
}

export const updateTweet = tweet => (
  $.ajax({
    method: `PATCH`,
    url: `/api/tweets/${tweet.id}`,
    data: { tweet },
    headers: csrf_token,
    error: err => console.log(err)
  })
)