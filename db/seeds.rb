# USER
user = User.create(username: "danielpaulw", password: "Test1")

# CHARACTER
character = Character.create(name: "Ivan", avatar: "https://raw.githubusercontent.com/danielpaulwill/wayfarer-lite-v3/main/client/src/assets/characters/archer.png", health: 50, evil: 100, strength: 50, defense: 50, luck: 50, user_id: user.id)

# LOCATIONS
forest = Location.create(character_id: character.id, name: "Forest", description: "You find yourself in a dark, thick forest. The tall trees block out most of the light and the underbrush is dense and tangled. The air is heavy with the smell of damp earth and decaying leaves, and the ground is covered in a thick layer of moss and fallen branches. The forest is alive with the sound of chirping birds and rustling leaves, but there are also other, more sinister noises - the snarl of a predator, the hiss of a venomous snake, the eerie wail of something up in the branches.;;The trees in this forest are ancient and massive, with thick trunks and branches that stretch high into the sky. The canopy is so dense that it is difficult to see more than a few feet ahead, creating a sense of unease and isolation.", is_complete: false)
volcano = Location.create(character_id: character.id, name: "Volcano", description: "The volcano is massive, with ashen gray slopes rising up into the sky. It looks like a giant, sleeping beast, with streams of fire and molten lava spilling out of its mouth. The heat from the volcano is intense, making the air shimmer and the ground hot to the touch.;;As the lava flows down the slopes of the volcano, it creates rivers of fire, lighting up the dark night sky. The ground trembles and shakes as the volcano spews ash and smoke into the air, creating a thick and dangerous fog.", is_complete: false)
beach = Location.create(character_id: character.id, name: "Beach", description: "It's a beach.", is_complete: false)
ruins = Location.create(character_id: character.id, name: "Ruins", description: "There are ruins.", is_complete: false)
village = Location.create(character_id: character.id, name: "Village", description: "A hidden village appears", is_complete: false)

# EVENTS
f1 = Event.create(location_id: forest.id, name: "Through the mist you see several cages with odd looking creatures in them.", description: "As the mist clears you can clearly see the animals are in distress. The cages are made from branches and rope. They are not very sturdy, but clearly strong enough to contain the helpless animals.", is_complete: false)
f2 = Event.create(location_id: forest.id, name: "In the distance you hear someone calling out for help.", description: "You strain to listen, but have a hard time pinpointing the direction it's coming from. Eventually you find the right direction and can hear the shouts getting louder as you get closer. All of a sudden the shouts seem to have stopped. You peek around a large tree and can see the person that was shouting, sitting with their back to you, their head in their hands. You can see that the shouts for help have turned into tears of despair.", is_complete: false)
f3 = Event.create(location_id: forest.id, name: "You see large claw marks on a nearby tree.", description: "Upon further examination, this mark was not made by an ordinary creature. There are two deeply cut claw marks, and the claws that made this mark have to be close to a foot long. You shudder thinking about the size of the creature that could make these marks. At that moment, you hear something far off in the forest that sounds like a roar, but you can hear it shaking trees far away, more than a normal roar should. As you instinctively look down from fear, you see a slight outline of a giant footprint in the ground.", is_complete: false)
f4 = Event.create(location_id: forest.id, name: "You can hear the far-off sound of water hitting rocks", description: "You stumble through the trees and see a small waterfall. There is a beam of light breaking through the tree tops, illuminating the clear blue water. The waterfall is a welcome sight in this dark and dreary wood. The waterfall is so beautiful that the longer you look at it, the more it seems to sparkle like a large fluid diamond", is_complete: false)

v1 = Event.create(location_id: volcano.id, name: "You see a group of people gathered around a giant crystal", description: "What will you do?", is_complete: false)
v2 = Event.create(location_id: volcano.id, name: "Through a thick layer of ash you see a hidden passage at the base of the volcano", description: "What will you do?", is_complete: false)
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

vl1 = Event.create(location_id: village.id, name: "Event One", description: "The first Village event.", is_complete: false)
vl2 = Event.create(location_id: village.id, name: "Event Two", description: "The second Village event.", is_complete: false)
vl3 = Event.create(location_id: village.id, name: "Event Three", description: "The third Village event.", is_complete: false)
vl4 = Event.create(location_id: village.id, name: "Event Four", description: "The fourth Village event.", is_complete: false)

# OPTIONS
f1o1 = Option.create(event_id: f1.id, action: "Break the cages and release the animals", result: "As you smash the cages all of the animals start to swarm around you. One by one they jump at you and latch on to you. At first you're filled with fear, until you realize they aren't attacking you, they're hugging you. Slowly each one eventually releases you and hops off, disappearing into the dark of the forest, but not before a couple of them give you a sweet tasting fruit.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: false, additional_sequence_type: nil)
f1o2 = Option.create(event_id: f1.id, action: "Poke the animals with a stick", result: "The animals start screaming and shaking the cages. The commotion alerts the person that caught the animals and they run over, ready to fight.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: true, additional_sequence_type: "fight")
f1o3 = Option.create(event_id: f1.id, action: "Crush the animals skulls with your foot", result: "The animals are surprisingly easy to crush. One by one you stomp the life out of each animal. You assumed they would make noise, but each creature you come to shakes with fear and is unable to make a sound. Among the carcasses you find a couple pieces of sweet tasting fruit.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: false, additional_sequence_type: nil)

f2o1 = Option.create(event_id: f2.id, action: "Calmly approach, announcing that you are here to help.", result: "They are clearly timid and surprised to see anyone else in this dense forest. As you talk with them, they slowly stop crying and start to open up. You learn that they were with several others but got separated. You offer to help them find their way out of the forest. After walking for what seemed like forever, you eventually see the daylight breaking through the forest in front of you. You walk the stranger to the edge of the forest and bid them farewell, they thank you and give you a small necklace before departing.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: false, additional_sequence_type: nil)
f2o2 = Option.create(event_id: f2.id, action: "Throw rocks at the person from your current hiding place.", result: "You hit them on the shoulder. They stop crying and look towards you to see where the rock came from. You duck behind the tree just in time to avoid their eyesight. You peek around the tree again and throw another rock at them, this time hitting them in the head. They immediately get up and run away, sobbing as they run. Then you hear a cry of pain, followed by a deafening silence. Upon investigation, it appears the person must have tripped on a root and impaled themselves on a broken tree stalk.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: false, additional_sequence_type: nil)
f2o3 = Option.create(event_id: f2.id, action: "Quietly, put as much distance as you can between yourself and the person as possible.", result: "Once you’re a good distance away you hear a blood curdling shriek followed by a violent growling, then a deafening silence. You can’t help but wonder if whatever fate befell this person would have also happened to you if you’d tried to help. Then you wonder if you may have saved this person from their own grisly demise. You put it out of your mind and move on. You can’t help everyone.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: false, additional_sequence_type: nil)

f3o1 = Option.create(event_id: f3.id, action: "Investigate the footprint", result: "As you move closer to the footprint you get a clearer view of it. It is larger than you first thought, close to 3 feet in length. As you investigate the massive footprint, you see a small glint of metal. Upon further investigation, there is some sort of amulet half-covered in mud pressed into the earth under the footprint. You clean it off as best as you can and can make out a set of strange looking markings. You’re unsure of what they mean, but they appear to be runes of some sort. You put the amulet in your pocket, and turn to look at the tree. As you’re walking to the tree you hear what sounds like a roar close by, this time it sounds more like a bear. This is clearly not from the same creature as earlier, but nonetheless, you decide not to confront whatever is heading your way and make a swift exit from the area.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: true, additional_sequence_type: nil)
f3o2 = Option.create(event_id: f3.id, action: "Further Investigate the claw marks on the tree", result: "As you move closer to the claw marks you get a clearer view of them. They are larger and deeper than you first thought. As you investigate the claw marks, you find a tattered piece of cloth stuck in the tree bark. Upon further investigation, there is stitching and what looks like a patch sewn onto the cloth. It was clearly a piece of clothing, the patch has a set of strange looking markings. You’re unsure of what they mean, but they appear to be runes of some sort. You put the cloth in your pocket, and turn to look at the footprint. As you’re walking to the massive footprint you hear what sounds like a roar close by, this time it sounds more like a bear. This is clearly not from the same creature as earlier, but nonetheless, you decide not to confront whatever is heading your way and make a swift exit from the area.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: true, additional_sequence_type: nil)
f3o3 = Option.create(event_id: f3.id, action: "Go towards the sound of the roar", result: "After a few minutes of walking you start to hear loud cadenced thuds. After each thud you feel a slight vibration in the ground and the trees around you. You rush to move closer but the thud and vibrations feel as though they are moving away from you quicker than you can run. Eventually the thuds stop completely and you are left in silence. You look around and realize there are tattered and ripped clothes all around you. Upon further investigation they all seem to have the same patch sewn onto them. The patch has some unusual runes on it. A stream of sunlight coming through the trees catches the edge of something glimmering among some of the clothes. You find a golden amulet covered with the same runes as the patches on the clothes. After searching among the clothes you find several other amulets, all covered with the same runes, you decide to keep one and safely stow it in your pocket.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil, result_benefit: nil, additional_sequence: true, additional_sequence_type: nil)



# Start working in the edits for Forest Event 4





f4o1 = Option.create(event_id: f4.id, action: "Option 1", result: "The first option of the fourth Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
f4o2 = Option.create(event_id: f4.id, action: "Option 2", result: "The second option of the fourth Forest event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

v1o1 = Option.create(event_id: v1.id, action: "Option 1", result: "The first option of the first Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v1o2 = Option.create(event_id: v1.id, action: "Option 2", result: "The second option of the first Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v2o1 = Option.create(event_id: v2.id, action: "Option 1", result: "The first option of the second Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v2o2 = Option.create(event_id: v2.id, action: "Option 2", result: "The second option of the second Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v3o1 = Option.create(event_id: v3.id, action: "Option 1", result: "The first option of the third Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v3o2 = Option.create(event_id: v3.id, action: "Option 2", result: "The second option of the third Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v4o1 = Option.create(event_id: v4.id, action: "Option 1", result: "The first option of the fourth Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
v4o2 = Option.create(event_id: v4.id, action: "Option 2", result: "The second option of the fourth Volcano event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

b1o1 = Option.create(event_id: b1.id, action: "Option 1", result: "The first option of the first Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b1o2 = Option.create(event_id: b1.id, action: "Option 2", result: "The second option of the first Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b2o1 = Option.create(event_id: b2.id, action: "Option 1", result: "The first option of the second Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b2o2 = Option.create(event_id: b2.id, action: "Option 2", result: "The second option of the second Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b3o1 = Option.create(event_id: b3.id, action: "Option 1", result: "The first option of the third Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b3o2 = Option.create(event_id: b3.id, action: "Option 2", result: "The second option of the third Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b4o1 = Option.create(event_id: b4.id, action: "Option 1", result: "The first option of the fourth Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
b4o2 = Option.create(event_id: b4.id, action: "Option 2", result: "The second option of the fourth Beach event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

r1o1 = Option.create(event_id: r1.id, action: "Option 1", result: "The first option of the first Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r1o2 = Option.create(event_id: r1.id, action: "Option 2", result: "The second option of the first Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r2o1 = Option.create(event_id: r2.id, action: "Option 1", result: "The first option of the second Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r2o2 = Option.create(event_id: r2.id, action: "Option 2", result: "The second option of the second Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r3o1 = Option.create(event_id: r3.id, action: "Option 1", result: "The first option of the third Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r3o2 = Option.create(event_id: r3.id, action: "Option 2", result: "The second option of the third Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r4o1 = Option.create(event_id: r4.id, action: "Option 1", result: "The first option of the fourth Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
r4o2 = Option.create(event_id: r4.id, action: "Option 2", result: "The second option of the fourth Ruins event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)

vl1o1 = Option.create(event_id: vl1.id, action: "Option 1", result: "The first option of the first Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl1o2 = Option.create(event_id: vl1.id, action: "Option 2", result: "The second option of the first Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl2o1 = Option.create(event_id: vl2.id, action: "Option 1", result: "The first option of the second Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl2o2 = Option.create(event_id: vl2.id, action: "Option 2", result: "The second option of the second Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl3o1 = Option.create(event_id: vl3.id, action: "Option 1", result: "The first option of the third Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl3o2 = Option.create(event_id: vl3.id, action: "Option 2", result: "The second option of the third Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl4o1 = Option.create(event_id: vl4.id, action: "Option 1", result: "The first option of the fourth Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)
vl4o2 = Option.create(event_id: vl4.id, action: "Option 2", result: "The second option of the fourth Village event.", is_complete: false, restriction_type: nil, restriction_value: nil, restriction_operation: nil)





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



