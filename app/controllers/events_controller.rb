class EventsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    # user = User.find(4)
    character = user.character

    forest = character.locations.find_by(name: "Forest")
    volcano = character.locations.find_by(name: "Volcano")
    
    f1 = Event.create(location_id: forest.id, name: "Event One", description: "The first Forest event.", is_complete: false)
    f2 = Event.create(location_id: forest.id, name: "Event Two", description: "The second Forest event.", is_complete: false)
    f3 = Event.create(location_id: forest.id, name: "Event Three", description: "The third Forest event.", is_complete: false)
    f4 = Event.create(location_id: forest.id, name: "Event Four", description: "The fourth Forest event.", is_complete: false)

    v1 = Event.create(location_id: volcano.id, name: "Event One", description: "The first Volcano event.", is_complete: false)
    v2 = Event.create(location_id: volcano.id, name: "Event Two", description: "The second Volcano event.", is_complete: false)
    v3 = Event.create(location_id: volcano.id, name: "Event Three", description: "The third Volcano event.", is_complete: false)
    v4 = Event.create(location_id: volcano.id, name: "Event Four", description: "The fourth Volcano event.", is_complete: false)
# byebug
    if (f1 && f2 && f3 && f4 && v1 && v2 && v3 && v4).valid?
    events = Event.all
    render json: events, status: :created
    else
      render json: { errors: f1.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    events = Event.all
    render json: events
  end

  def update
    event = Event.find_by(id: params[:id])
    if event
      event.update(is_complete: params[:is_complete])
      render json: event, status: :accepted
    else
      render json: { error: "Not updated" }, status: :unauthorized
    end
  end
  
end
