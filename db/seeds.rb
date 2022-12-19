# USER
user = User.create(username: "danielpaulw", password: "Test1", :password_digest)

# CHARACTER
character = Character.create(name: "Ivan", avatar: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/characters/archer.png", health: 50, evil: 50, strength: 50, defense: 50, luck: 50, user_id: user.id)

# LOCATIONS
forest = Location.create(character_id: character.id, name: "Forest", description: "You find yourself in a dark, thick forest. The tall trees block out most of the light and the underbrush is dense and tangled. The air is heavy with the smell of damp earth and decaying leaves, and the ground is covered in a thick layer of moss and fallen branches. The forest is alive with the sound of chirping birds and rustling leaves, but there are also other, more sinister noises - the snarl of a predator, the hiss of a venomous snake, the eerie wail of a banshee.
The trees in this forest are ancient and massive, with thick trunks and branches that stretch high into the sky. The canopy is so dense that it is difficult to see more than a few feet ahead, creating a sense of unease and isolation.    
Despite the dangers, the dark, thick forest is also a place of great beauty and wonder. The vibrant green of the leaves, the sparkling streams, and the delicate wildflowers all contribute to its charm. It is a place of solitude and contemplation. Adventurers who are brave enough to venture into this forest may find hidden treasures, lost secrets, or most importantly, answers; but they must be prepared to face the dangers that lurk within its depths.
", is_complete: false)
volcano = Location.create(character_id: character.id, name: "Volcano", description: "A giant, smoking mountain lay before you. It feels warmer the closer you get to it.", is_complete: false)

# EVENTS
f1 = Event.create(location_id: forest.id, name: "Event One", description: "The first Forest event.", is_complete: false)
f2 = Event.create(location_id: forest.id, name: "Event Two", description: "The second Forest event.", is_complete: false)
f3 = Event.create(location_id: forest.id, name: "Event Three", description: "The third Forest event.", is_complete: false)
f4 = Event.create(location_id: forest.id, name: "Event Four", description: "The fourth Forest event.", is_complete: false)

v1 = Event.create(location_id: volcano.id, name: "Event One", description: "The first Volcano event.", is_complete: false)
v2 = Event.create(location_id: volcano.id, name: "Event Two", description: "The second Volcano event.", is_complete: false)
v3 = Event.create(location_id: volcano.id, name: "Event Three", description: "The third Volcano event.", is_complete: false)
v4 = Event.create(location_id: volcano.id, name: "Event Four", description: "The fourth Volcano event.", is_complete: false)










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



