class Api::TweetsController < ApplicationController
  def index
    @tweets = Tweet.all
    render :index
  end

  def show
    @tweet = Tweet.find(params[:id])

    if @tweet
      render :show
    else
      render json: @tweet.errors.full_messages, status: 404
    end
  end

  def create
    @tweet = Tweet.new(tweet_params)

    if @tweet.save
      render :show
    else
      render json: @tweet.errors.full_messages, status: 422
    end
  end

  def update
    @tweet = Tweet.find(params[:id])

    if @tweet.update(tweet_params)
      render :show
    else
      render json: @tweet.errors.full_messages, status: 422
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body, :user_id, :retweet_id, :id, :created_at, likes: [])
  end

end