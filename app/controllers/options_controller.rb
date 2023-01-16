class OptionsController < ApplicationController

  def create
    user = User.find_by(id: session[:user_id])
    # user = User.find(9)
    character = user.character

    forest = character.locations.find_by(name: "Forest")
    volcano = character.locations.find_by(name: "Volcano")

    f1 = forest.events.first
    f2 = forest.events.second
    f3 = forest.events.third
    f4 = forest.events.fourth
    
    f1o1 = Option.create(event_id: f1.id, action: "Option 1", result: "The first option of the first Forest event.", is_complete: false)
    f1o2 = Option.create(event_id: f1.id, action: "Option 2", result: "The second option of the first Forest event.", is_complete: false)
    
    f2o1 = Option.create(event_id: f2.id, action: "Option 1", result: "The first option of the second Forest event.", is_complete: false)
    f2o2 = Option.create(event_id: f2.id, action: "Option 2", result: "The second option of the second Forest event.", is_complete: false)
    
    f3o1 = Option.create(event_id: f3.id, action: "Option 1", result: "The first option of the third Forest event.", is_complete: false)
    f3o2 = Option.create(event_id: f3.id, action: "Option 2", result: "The second option of the third Forest event.", is_complete: false)
    
    f4o1 = Option.create(event_id: f4.id, action: "Option 1", result: "The first option of the fourth Forest event.", is_complete: false)
    f4o2 = Option.create(event_id: f4.id, action: "Option 2", result: "The second option of the fourth Forest event.", is_complete: false)
    
    v1 = volcano.events.first
    v2 = volcano.events.second
    v3 = volcano.events.third
    v4 = volcano.events.fourth

    v1o1 = Option.create(event_id: v1.id, action: "Option 1", result: "The first option of the first Volcano event.", is_complete: false)
    v1o2 = Option.create(event_id: v1.id, action: "Option 2", result: "The second option of the first Volcano event.", is_complete: false)

    v2o1 = Option.create(event_id: v2.id, action: "Option 1", result: "The first option of the second Volcano event.", is_complete: false)
    v2o2 = Option.create(event_id: v2.id, action: "Option 2", result: "The second option of the second Volcano event.", is_complete: false)

    v3o1 = Option.create(event_id: v3.id, action: "Option 1", result: "The first option of the third Volcano event.", is_complete: false)
    v3o2 = Option.create(event_id: v3.id, action: "Option 2", result: "The second option of the third Volcano event.", is_complete: false)

    v4o1 = Option.create(event_id: v4.id, action: "Option 1", result: "The first option of the fourth Volcano event.", is_complete: false)
    v4o2 = Option.create(event_id: v4.id, action: "Option 2", result: "The second option of the fourth Volcano event.", is_complete: false)

    # byebug
    if (f1o1 && f1o2 && f2o1 && f1o2 && f3o1 && f3o2 && f4o1 && f4o2 && v1o1 && v1o2 && v2o1 && v1o2 && v3o1 && v3o2 && v4o1 && v4o2).valid?
    options = Option.all
    render json: options, status: :created
    else
      render json: { errors: f1o1.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def index
    options = Option.all
    render json: options
  end
  
end
