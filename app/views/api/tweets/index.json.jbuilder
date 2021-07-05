@tweets.each do |tweet|
    json.set! tweet.id do
        json.partial! 'tweet', tweet: tweet
    end
end