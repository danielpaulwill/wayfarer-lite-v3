class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { error: "username and password combination not found" }, status: :unauthorized
    end
  end

  def destroy
    user = User.find_by(id: session[:user_id])
    if user
      session.destroy
      render json: [], status: :no_content
    else
      # user = User.first
      render json: { errors: user.errors.full_messages }, status: :unauthorized
    end
  end
  
end
