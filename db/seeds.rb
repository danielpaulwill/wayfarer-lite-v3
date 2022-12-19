# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


{
  "locations": [
    {
      "id": 1,
      "name": "string",
      "description": "string",
      "is_complete": "boolean",
      "character_id": "integer"
    }
  ],
  "characters": [
    {
      "id": 1,
      "user_id": "integer",
      "name": "string",
      "avatar": "string",
      "health": "integer",
      "evil": "integer",
      "strength": "integer",
      "defense": "integer",
      "luck": "integer"
    }
  ],
  "events": [
    {
      "id": 1,
      "location_id": "integer",
      "name": "string",
      "description": "string",
      "is_complete": "boolean"
    }
  ],
  "items": [
    {
      "id": 1,
      "character_id": "integer",
      "name": "string",
      "avatar": "string",
      "quantity": "integer"
    }
  ],
  "options": [
    {
      "id": 1,
      "event_id": "integer",
      "name": "string",
      "description": "string",
      "is_complete": "boolean"
    }
  ],
  "users": [
    {
      "id": 1,
      "username": "string",
      "password": "string",
      "password_digest": "string"
    }
  ]
}





// EVENTS
// forest = character.locations.find_by(name: "Forest")
// volcano = character.locations.find_by(name: "Volcano")

// f1 = Event.create(location_id: forest.id, name: "Event One", description: "The first Forest event.", is_complete: false)
// f2 = Event.create(location_id: forest.id, name: "Event Two", description: "The second Forest event.", is_complete: false)
// f3 = Event.create(location_id: forest.id, name: "Event Three", description: "The third Forest event.", is_complete: false)
// f4 = Event.create(location_id: forest.id, name: "Event Four", description: "The fourth Forest event.", is_complete: false)

// v1 = Event.create(location_id: volcano.id, name: "Event One", description: "The first Volcano event.", is_complete: false)
// v2 = Event.create(location_id: volcano.id, name: "Event Two", description: "The second Volcano event.", is_complete: false)
// v3 = Event.create(location_id: volcano.id, name: "Event Three", description: "The third Volcano event.", is_complete: false)
// v4 = Event.create(location_id: volcano.id, name: "Event Four", description: "The fourth Volcano event.", is_complete: false)