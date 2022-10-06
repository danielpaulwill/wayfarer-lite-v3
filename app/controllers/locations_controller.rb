class LocationsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    # user = User.find(4)
    forest = Location.create(character_id: user.character.id, name: "Forest", description: "A deep green, lush rainforest. It seems inviting, yet you can feel it holds danger.", is_complete: false)
    volcano = Location.create(character_id: user.character.id, name: "Volcano", description: "A giant, smoking mountain lay before you. It feels warmer the closer you get to it.", is_complete: false)
    # byebug
    locations = Location.all
    render json: locations, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    character = user.character
    # byebug
    forest = character.location.find_by(name: params[:select])
  end

  def index
    locations = Location.all
    render json: locations
  end

  def select
    user = User.find_by(id: session[:user_id])
    # user = User.find(4)
    character = user.character
    location = character.locations.find_by(name: params[:name])
    render json: location, except: [:created_at, :updated_at], include: [:events => { :include => :options }], status: :ok
  end

  def select_again
    event = Event.find_by(id: params[:event_id])
    location = Location.find_by(id: event.location_id)
    render json: location, except: [:created_at, :updated_at], include: [:events => { :include => :options }], status: :ok  
  end
  
end
