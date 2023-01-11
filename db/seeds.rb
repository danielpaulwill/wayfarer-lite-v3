# USER
user = User.create(username: "danielpaulw", password: "Test1")

# CHARACTER
character = Character.create(name: "Ivan", avatar: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/characters/archer.png", health: 50, evil: 50, strength: 50, defense: 50, luck: 50, user_id: user.id)

# LOCATIONS
forest = Location.create(character_id: character.id, name: "Forest", description: "You find yourself in a dark, thick forest. The tall trees block out most of the light and the underbrush is dense and tangled. The air is heavy with the smell of damp earth and decaying leaves, and the ground is covered in a thick layer of moss and fallen branches. The forest is alive with the sound of chirping birds and rustling leaves, but there are also other, more sinister noises - the snarl of a predator, the hiss of a venomous snake, the eerie wail of something up in the branches.
The trees in this forest are ancient and massive, with thick trunks and branches that stretch high into the sky. The canopy is so dense that it is difficult to see more than a few feet ahead, creating a sense of unease and isolation.
", is_complete: false)
volcano = Location.create(character_id: character.id, name: "Volcano", description: "A giant, smoking mountain lay before you. It feels warmer the closer you get to it.", is_complete: false)
beach = Location.create(character_id: character.id, name: "Beach", description: "It's a beach.", is_complete: false)
ruins = Location.create(character_id: character.id, name: "Ruins", description: "There are ruins.", is_complete: false)

# EVENTS
f1 = Event.create(location_id: forest.id, name: "Through the mist you see several cages with odd looking creatures in them.", description: "The first Forest event.", is_complete: false)
f2 = Event.create(location_id: forest.id, name: "In the distance you hear someone calling out for help.", description: "The second Forest event.", is_complete: false)
f3 = Event.create(location_id: forest.id, name: "Event Three", description: "The third Forest event.", is_complete: false)
f4 = Event.create(location_id: forest.id, name: "Event Four", description: "The fourth Forest event.", is_complete: false)

v1 = Event.create(location_id: volcano.id, name: "Event One", description: "The first Volcano event.", is_complete: false)
v2 = Event.create(location_id: volcano.id, name: "Event Two", description: "The second Volcano event.", is_complete: false)
v3 = Event.create(location_id: volcano.id, name: "Event Three", description: "The third Volcano event.", is_complete: false)
v4 = Event.create(location_id: volcano.id, name: "Event Four", description: "The fourth Volcano event.", is_complete: false)

b1 = Event.create(location_id: beach.id, name: "Event One", description: "The first Beach event.", is_complete: false)
b2 = Event.create(location_id: beach.id, name: "Event Two", description: "The second Beach event.", is_complete: false)
b3 = Event.create(location_id: beach.id, name: "Event Three", description: "The third Beach event.", is_complete: false)
b4 = Event.create(location_id: beach.id, name: "Event Four", description: "The fourth Beach event.", is_complete: false)

r1 = Event.create(location_id: ruins.id, name: "Event One", description: "The first Ruins event.", is_complete: false)
r2 = Event.create(location_id: ruins.id, name: "Event Two", description: "The second Ruins event.", is_complete: false)
r3 = Event.create(location_id: ruins.id, name: "Event Three", description: "The third Ruins event.", is_complete: false)
r4 = Event.create(location_id: ruins.id, name: "Event Four", description: "The fourth Ruins event.", is_complete: false)

# OPTIONS

restriction_type
restriction_value
restriction_operation

f1o1 = Option.create(event_id: f1.id, name: "Option 1", description: "The first option of the first Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f1o2 = Option.create(event_id: f1.id, name: "Option 2", description: "The second option of the first Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f2o1 = Option.create(event_id: f2.id, name: "Option 1", description: "The first option of the second Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f2o2 = Option.create(event_id: f2.id, name: "Option 2", description: "The second option of the second Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f3o1 = Option.create(event_id: f3.id, name: "Option 1", description: "The first option of the third Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f3o2 = Option.create(event_id: f3.id, name: "Option 2", description: "The second option of the third Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f4o1 = Option.create(event_id: f4.id, name: "Option 1", description: "The first option of the fourth Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f4o2 = Option.create(event_id: f4.id, name: "Option 2", description: "The second option of the fourth Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

v1o1 = Option.create(event_id: v1.id, name: "Option 1", description: "The first option of the first Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v1o2 = Option.create(event_id: v1.id, name: "Option 2", description: "The second option of the first Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v2o1 = Option.create(event_id: v2.id, name: "Option 1", description: "The first option of the second Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v2o2 = Option.create(event_id: v2.id, name: "Option 2", description: "The second option of the second Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v3o1 = Option.create(event_id: v3.id, name: "Option 1", description: "The first option of the third Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v3o2 = Option.create(event_id: v3.id, name: "Option 2", description: "The second option of the third Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v4o1 = Option.create(event_id: v4.id, name: "Option 1", description: "The first option of the fourth Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v4o2 = Option.create(event_id: v4.id, name: "Option 2", description: "The second option of the fourth Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

b1o1 = Option.create(event_id: b1.id, name: "Option 1", description: "The first option of the first Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b1o2 = Option.create(event_id: b1.id, name: "Option 2", description: "The second option of the first Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b2o1 = Option.create(event_id: b2.id, name: "Option 1", description: "The first option of the second Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b2o2 = Option.create(event_id: b2.id, name: "Option 2", description: "The second option of the second Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b3o1 = Option.create(event_id: b3.id, name: "Option 1", description: "The first option of the third Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b3o2 = Option.create(event_id: b3.id, name: "Option 2", description: "The second option of the third Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b4o1 = Option.create(event_id: b4.id, name: "Option 1", description: "The first option of the fourth Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b4o2 = Option.create(event_id: b4.id, name: "Option 2", description: "The second option of the fourth Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

r1o1 = Option.create(event_id: r1.id, name: "Option 1", description: "The first option of the first Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r1o2 = Option.create(event_id: r1.id, name: "Option 2", description: "The second option of the first Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r2o1 = Option.create(event_id: r2.id, name: "Option 1", description: "The first option of the second Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r2o2 = Option.create(event_id: r2.id, name: "Option 2", description: "The second option of the second Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r3o1 = Option.create(event_id: r3.id, name: "Option 1", description: "The first option of the third Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r3o2 = Option.create(event_id: r3.id, name: "Option 2", description: "The second option of the third Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r4o1 = Option.create(event_id: r4.id, name: "Option 1", description: "The first option of the fourth Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r4o2 = Option.create(event_id: r4.id, name: "Option 2", description: "The second option of the fourth Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)






# {
#   "locations": [
#     {
#       "id": 1,
#       "name": "string",
#       "description": "string",
#       "is_complete": "boolean",
#       "character_id": "integer"
#     }
#   ],
#   "characters": [
#     {
#       "id": 1,
#       "user_id": "integer",
#       "name": "string",
#       "avatar": "string",
#       "health": "integer",
#       "evil": "integer",
#       "strength": "integer",
#       "defense": "integer",
#       "luck": "integer"
#     }
#   ],
#   "events": [
#     {
#       "id": 1,
#       "location_id": "integer",
#       "name": "string",
#       "description": "string",
#       "is_complete": "boolean"
#     }
#   ],
#   "items": [
#     {
#       "id": 1,
#       "character_id": "integer",
#       "name": "string",
#       "avatar": "string",
#       "quantity": "integer"
#     }
#   ],
#   "options": [
#     {
#       "id": 1,
#       "event_id": "integer",
#       "name": "string",
#       "description": "string",
#       "is_complete": "boolean"
#     }
#   ],
#   "users": [
#     {
#       "id": 1,
#       "username": "string",
#       "password": "string",
#       "password_digest": "string"
#     }
#   ]
# }



