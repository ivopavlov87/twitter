class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render :show # this routes to "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render json: ["Successfully logged out"] # this is for testing purposes
    else
      render json: ["No user is signed in"], status: 404
    end
  end
end