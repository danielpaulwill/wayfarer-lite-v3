class CharactersController < ApplicationController

  def create
    character = Character.create(name: params[:name], avatar: params[:avatar], health: params[:health], evil: params[:evil], strength: params[:strength], defense: params[:defense], luck: params[:luck], user_id: session[:user_id])
    if character.valid?
      render json: character, status: :created
    else
      render json: { errors: character.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    characters = Character.all
    render json: characters
  end

  def update
    character = Character.find_by(id: params[:id])
    if character
      character.update(evil: params[:evil])
      render json: character, status: :accepted
    else
      render json: { error: "Not updated" }, status: :unauthorized
    end
  end

end
