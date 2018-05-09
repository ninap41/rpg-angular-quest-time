
import { weapons, items } from './item-create';
import { npcs } from './npc-create';
import { Wizard,  Ninja, Elf, Dwarf, Human, Orc, Player} from './player-create';




// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign



    

const moods = [ 
    { 'happy' : +5 },
    { 'sad' : -5 },
    { 'angry' : -5 },
]

const attributes = [ 
    { 'happy' : +5 },
    { 'sad' : -5 },
    { 'angry' : -5 },
]


var qty = 0;

let matches = {
    'id' : Math.floor(Math.random() * 10000000000),
    "value" : 'matches',
    "name" : 'Matches',
    'type' : 'scenario',
    'limit' : true,
    'qty' : 3,
    "description" : `Used to light places.`,
    
}

const orc_knife = weapons.basic_weapons[0];


const enemies= {
    'baracder' : {
        'name': 'Baravder The Orc',
        'race' : 'Orc',
        'lvl' : 2,
        'health' : 80,
        'description': `He's a big ugly boy`,
        'opening_line': `"I saw you through the window you poor bastard. I'm going to gut you like your mother. Come here!"`,
        'speed' : 4,
        'damage' : 3,
        'weapon' : orc_knife,
        'flee_chance': 2,
    },

}
const events = {
    "dead_mother" : {
        'update_message': null,
        'event_state' : true,
        "name":"A Life Deferred...",
        "description" : 'Your mother lays sound asleep beneath the covers. You race to her side, shaking her to consciousness. Shaking and shaking to no avail, you turn her limp body over to see a bowing blade, jutting right from her chest. A craftsmenship like you have never seen in these lands. A cackle sinks from behind the window, and you see the flickering flames beyond, the shattered glass. ',
        'inspects' : [
            {
            'guard' : false,
            'name' : 'Unlodge Knife',
            'object' : orc_knife,
            'event' :'take',
            'description' : 'A jagged knife lays lodged in her chest, you must rip it out to get it.'
            },
            {
                'guard' : false,
                'name' : 'Look in Drawer',
                'object' : matches,
                'event' :'take',
                'description' : `You see a red box and some candles.`
                }
        ],
        "access_directions_state" : false,
        "directions": [
            { 
                'name': 'Outside',
                'description' : 'Brave the outside and risk death? At least you have another weapon now.',
                'room' : 'outside2'
            },
            { 
                'name': 'Careful Window Exit',
                'description' : 'You wait until the sound of pillaging orcs pass. You hear them, huffing and shouting an incoherent chant. The top of their torches and banners wave out of view. It may be safe to move',
                'room' : 'window_ledge'
            },
            { 
                'name': 'Storage Room',
                'description' : 'Now that you have those matches...',
                'room' : 'storage_room'
            }
        ]

    },

    "local_storage" : {    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
        'update_message': null,
        'event_state' : true,
        "name":"A light in dark places",
        "description" : 'You illuminate the storage closet to see supplies. A a few vials and a book. You dont have time to think, just take them.',
        'inspects' : [
            {
            'guard' : false,
            'name' : 'Mysterious Vial',
            'object' : items.potion_of_luck,
            'event' :'take',
            'description' : `You have no idea what this is but it's glowing bright green.`
            },
            {
                'guard' : false,
                'name' : 'Grab Book',
                'object' : items.book_of_fire_spell,
                'event' :'take',
                'description' : `You have no idea what this is, and honestly, why would you grab a book at a time like this?`
                }
        ],
        "access_directions_state" : false,
        "directions": [
            { 
                'name': 'Outside',
                'description' : 'With your mother dead and your spirits down, what else is there to lose? Head outside.',
                'room' : 'outside2'
            },
            { 
                'name': 'Careful Window Exit',
                'description' : 'You wait until the sound of pillaging orcs pass. You hear them, huffing and shouting an incoherent chant. The top of their torches and banners wave out of view. It may be safe to move',
                'room' : 'window_ledge'
            }
        ]

    },
    "firstspawn" : {    
        'enemy' : enemies.baracder,           // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
        'update_message': null,
        'event_state' : true,
        "name":"First Encounter...",
        "description" : `Enemy Appears, a massive drooling Orc named '${enemies.baracder.name}'. He Carries a ${enemies.baracder.weapon.name} he swings by his belt. He stares you down and says "${enemies.baracder.opening_line}". You have two options to Run or Fight. Its too early in the game to introduce battle dynamics `,
        'inspects' : [
            {
            'guard' : false,
            'needsweapon': true,
            'name' : 'Fight',
            'event' :'fight',
            'subevent_onevent' : '',
            'description' : 'You may have to battle this big boy'
            },
            {
            'guard' : false,
            'needsweapon': true,
            'name' : 'Run',
            'event' :'run',
            'description' : `Running away is often risky. You have very little chance of fleeing.`
            }
        ],
        "access_directions_state" : false,
        "directions": [
            { 
                'name': 'To Stables',
                'description' : 'Go get a horse',
                'room' : 'stables'
            },
            { 
                'name': 'Run Away into High Brush',
                'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
                'room' : 'high_brush'
            }
        ]

    },


}



let HumanWorldStart =
{ 
    "name": 'CHARHOMETOWN',
    'world_description' : 'You are in your hometown of CHARHOMETOWN.',
    "imageUrl":"../../assets/world-background/town.jpg",

    "home":{
        'update_message': null,
        "name": "Home Main Room",
        "description":`You are CHARNAME 'CHARRACE of CHARHOMETOWN'. You've awoken from a nap. Loud sounds ensue outside your home, an unfamiliar experience for you. It is dark, but through the slits of your wooden home you can see a wavering glow. You hear some cries of a woman outside. Banter and chaos. The crackling of fire. There are two rooms before you, the east and the west. There is also the exit outside. You experience like you have never felt before`,
        "directions": [
            {
                "name":"Mother's Room",
                "room": "mothers_room",
                "description" : 'there are footsteps rustling behind the door, sound of moaning and a window shutting.'
            },
            {
                
                "name":"Storage Room",
                "room":"storage_room",
                "description" : 'there could be supplies inside... It might be useful to inspect.'
            },
          
        ], // take out
        'inspects': [
             
            {
                'guard' : false,
                'update_message': null,
                "name":"Trigger Fight",
                "event":"firstspawn",
                "description": "The intervals of breathing, chest rising and falling, seem slow...",

            },
           

        ],
    },
    "home_return":{
        'update_message': null,

        "name": "Home Main Room",
        "description":`You return to the Main Room, panicked and scared... You feel you need a weapon. You hear glass break somewhere in the house. A muffled yelp. `,
        "directions": [
            {
                "name":"Mother's Room",
                "room": "mothers_room_revisited",
                "description" : 'there are footsteps rustling behind the door, sound of moaning and a window shutting.'
            },
            {
                "name":"Storage Room",
                "room":"storage_room",
                "description" : 'there could be supplies inside... Something strange is going on outside.'
            }
        ],
     
        
    },

    "window_ledge":{
        'update_message': null,

        "name": "Back of The House",
        "description":`You return to the Main Room, panicked and scared... You feel you need a weapon. You hear glass break somewhere in the house. A muffled yelp. `,
        "directions": [
            {
                "name":"Mother's Room",
                "room": "mothers_room_revisited",
                "description" : 'there are footsteps rustling behind the door, sound of moaning and a window shutting.'
            },
            {
                "name":"Storage Room",
                "room":"storage_room",
                "description" : 'there could be supplies inside... Something strange is going on outside.'
            }
        ],
     
        
    },
    "mothers_room":{
        'update_message': null,

        "name" : "Mother's room",
        "description": "Your mother is asleep in her bed after a greuling day in the fields. You'd ask her if the village parade was going on outside, but you don't wish to disturb her.",
        "directions": [
            {
                "room": "home",
                "name":"Home Bedroom",
                "description" : "Return the main room? Might be smart.",

               
            },
            { "room":"storage_room",
                "name":"Storage Room",
                "description" : "It'd be way to dark to see in there without a candle or match",

               
            },
            {
                "room":"outside",
                "name":"Outside",
                "description" : "The window beside the door is veiled in a black smoke.",

            }
        ],
     
    },

    "mothers_room_revisited":{
        'update_message': null,

        "name" : "Mother room",
        "description": "Amidst the commotion, your mother is still asleep. The room is slightly chilled. What should you do?",
        "directions": [
            {
                "room": "outside2",
                "name":"Forget her. Window escape",
                "description" : "TIP: Actions like this have a negative impact on your Karma. Karma influences your fate.",

                'karma' : ['bad', 2],
  
               
            },
            {   "room":"storage_room",
                "name":"Storage Room?",
                "description" : "Something doesnt feel right... maybe I can arm myself there?",
                'karma' : 'good',
                'karma' : ['good', 2],

               
            },
            {
                "room":"outside",
                "name":"Outside",
                "description" : "You might as well make a sprint for it outside... To the next town over?"
            }
        ],
        'inspects': [
             
            {
                'update_message': null,

                "name":"Inspect Mother",
                "event":"dead_mother",
                "description": "The intervals of breathing, chest rising and falling, seem slow...",

            },
           

        ],
    },
    "storage_room":{
        'update_message': null,

        'name' : 'Storage Room',
        "description": "The Storage room is quite dusty you can barely see a thing",
        "directions":[
            {
                "room": "mothers_room",
                "name":"Mother's Room",
                "description": "Your heart is beating fast as your hand hovers over the your mother's door handle"
               
            },
           
            {
                "room":"outside",
                "name":"Outside",
                "description": "As you twist the knob you hear a scream."

            }
        ],
        "inspects": [
            {
                "guard" : false,
                "name": "Feel Around Room",
                "eradicate" : 'matches',
                "event": "light_storage_hurt",
                "description": "Oh boy, hope you don't get hurt!",
                   

                },
                {
                    "guard" : true,
                    "name":"Light the way",
                    "needs" : 'matches',
                    "event": "local_storage",
                    "description": "You have Matches in your Inventory!",
                }
            ],
  
    },
    "outside":{

        visits: 0,
        'name' : 'Outside',
        "description":"You see before you the fields of your father's farm ablaze. Orcs hanging from roofs, lighting haystacks with torches and the chants of Black Speech forbidden in your land. The",
        "directions":[
            {
                "room":"stables",
                "name":"Parents Stables",
                "description": "If the horses have not but run away, you can take one. You pray your horse Grendel is alive and calm.",
                "color" : 'red'
            }, 
            {
                "room":"gaffer_thomas_house",
                "name":"Gaffer Thomas House",
                'description': 'Where is your friend thomas?! What if he is hurt?',
                "color" : 'brown'
            }, 
            {
                "room":"neighbors",
                "name":"BrandyBuck Home",
                'description': 'They could help you potentially.',
                "color" : 'orange'
            }, 
            {
                "room":"home_return",
                "name":"Back Inside",
                'description': 'You need to wake your mother, grab a weapon, and gather your things. This might be the smartest choice',
                "color" : 'green'
            }, 


        ]
    },
    "neighbors":{
        'update_message': null,

        "name" : 'BrandyBuck Home',
        "description":"You see before you the fields of your father's farm ablaze. Orcs hanging from roofs, lighting haystacks with torches and the chants of Black Speech forbidden in your land. The",
        "directions":[
            {
                "direction":"Back Inside",
                'description': 'You need to wake your mother, grab a weapon, and gather your things. This might be the smartest choice',
                "room":"home"
            }, 
         

        ]
    },

    // OUTSIDE HOME REALMS  // OUTSIDE HOME REALMS // OUTSIDE HOME REALMS // OUTSIDE HOME REALMS
    "outside2":{
        'eventtriggerchance': 2, //fifty fifty chance
        'event': 'firstspawn',
        'name' : 'Outside',
        "description":`You stumble out the door nearly bashing into Thomas shouting CHARNAME! Bless your little CHARRACE heart. Make for the next town over as fast as you can. I'll meet you there.`,
        "directions":[
            {
                "room":"stables",
                "name":"Parents Stables",
                "description" : "A horse would be the perfect way to outrun the orcs.",
                "color" : 'red'
            }, 
            {
                "room":"gaffer_thomas_house",
                "name":"Gaffer Thomas House",
                "description" : "A possible chance for you to steal some goods. There may not be enough time.",
                "color" : 'brown'
            }, 
            {
                "room":"neighbors",
                "name":"BrandyBuck Home",
                "description" : "The Brandy Bucks are the little folk in town. They are most at risk.",

                "color" : 'orange'
            }, 
        


        ]
    },
}





export { HumanWorldStart, events, orc_knife, WorldPlayer, player }

