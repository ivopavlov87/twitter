json.extract! tweet, :id, :user_id, :body, :likes, :retweet_id, :created_at
json.author tweet.user.username