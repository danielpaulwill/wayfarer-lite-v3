class LocationsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    # user = User.find(4)
    forest = Location.create(character_id: user.character.id, name: "Forest", description: "You find yourself in a dark, thick forest. The tall trees block out most of the light and the underbrush is dense and tangled. The air is heavy with the smell of damp earth and decaying leaves, and the ground is covered in a thick layer of moss and fallen branches. The forest is alive with the sound of chirping birds and rustling leaves, but there are also other, more sinister noises - the snarl of a predator, the hiss of a venomous snake, the eerie wail of a banshee.
    The trees in this forest are ancient and massive, with thick trunks and branches that stretch high into the sky. The canopy is so dense that it is difficult to see more than a few feet ahead, creating a sense of unease and isolation.    
    Despite the dangers, the dark, thick forest is also a place of great beauty and wonder. The vibrant green of the leaves, the sparkling streams, and the delicate wildflowers all contribute to its charm. It is a place of solitude and contemplation. Adventurers who are brave enough to venture into this forest may find hidden treasures, lost secrets, or most importantly, answers; but they must be prepared to face the dangers that lurk within its depths.
    ", is_complete: false)
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
