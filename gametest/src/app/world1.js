
import { weapons } from './item-create';
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


var qty = 3;

const matches = {
    "name" : 'Matches',
    'type' : 'scenario',
    'qty' : 3,
    "description" : `Used to light places. Careful though. Only ${qty} here.`,
    "uses" : false
    
};

const orc_knife = weapons.basic_weapons[0];


const enemies= {

}
const events = {
    "dead_mother" : {
        'update_message': null,
        'event_state' : true,
        "name":"An Life Deferred...",
        "description" : 'Your mother lays sound asleep beneath the covers. You race to her side, shaking her to consciousness. Shaking and shaking to no avail, you turn her limp body over to see a bowing blade, jutting right from her chest. A craftsmenship like you have never seen in these lands. A cackle sinks from behind the window, and you see the flickering flames beyond, the shattered glass. ',
        'inspects' : [
            {
            'guard' : false,
            'name' : 'Unlodge Knife',
            'object' : orc_knife,
            'event' :'take',
            // 'subevent_onevent' : '',
            'description' : 'A jagged knife lays lodged in her chest, you must rip it out to get it.'
            },
            {
                'guard' : false,
                'name' : 'Look in Drawer',
                'object' : matches,
                'event' :'take',
                'description' : `You see ${matches.name}. '${matches.description} `
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
            }
        ]

    },

    "local_storage" : {    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
        'update_message': null,
        'event_state' : true,
        "name":"A light in dark places",
        "description" : 'You illuminate the storage closet to see supplies',
        'inspects' : [
            {
            'guard' : true,
            'name' : 'Unlodge Knife',
            'object' : 'apple',
            'event' :'take',
            'subevent_onevent' : '',
            'description' : 'A jagged knife lays lodged in her chest, you must rip it out to get it.'
            },
            {
                'guard' : false,
                'name' : 'Look in Drawer',
                'object' : matches,
                'event' :'take',
                'description' : `You see ${matches.name}. '${matches.description} `
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
            }
        ]

    },
    "firstspawn" : {               // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
        'update_message': null,
        'event_state' : true,
        "name":"First Encounter...",
        "description" : 'Enemy Appears, a massive drooling. He Carries a large Mace he swings by his belt. You have two options to Run or Fight. Its too early in the game to introduce battle dynamics ',
        'inspects' : [
            {
            'guard' : true,
            'name' : 'Fight',
            'event' :'fight',
            'subevent_onevent' : '',
            'description' : 'You may have to battle this big boy'
            },
            {
            'guard' : false,
            'name' : 'Run',
            'event' :'flee',
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
                'name': 'Run Away into high brush',
                'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
                'room' : 'high_brush'
            }
        ]

    },


}



let HumanWorldStart =
{ 
    "imageUrl":"../../assets/world-background/town.jpg",
    "home":{
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
            }
        ],
    },
    "home_return":{
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
    "mothers_room":{
        "name" : "Mother's room",
        "description": "Your mother is asleep in her bed after a greuling day in the fields. You'd ask her if the village parade was going on outside, but you don't wish to disturb her.",
        "directions": [
            {
                "room": "home",
                "name":"Home Bedroom",
               
            },
            { "room":"storage_room",
                "name":"Storage Room",
               
            },
            {
                "room":"outside",
                "name":"Outside"
            }
        ],
     
    },

    "mothers_room_revisited":{
        "name" : "Mother room",
        "description": "Amidst the commotion, your mother is still asleep. The room is slightly chilled. What should you do?",
        "directions": [
            {
                "room": "home",
                "name":"Forget her. Window escape",
                'karma' : 'bad'
               
            },
            {   "room":"storage_room",
                "name":"Storage Room?",
                "description" : "Something doesnt feel right... maybe I can arm myself there?",
                'karma' : 'smart'

               
            },
            {
                "room":"outside",
                "name":"Outside",
                "description" : "You might as well make a sprint for it outside... To the next town over?"
            }
        ],
        'inspects': [
             
            {
                "name":"Inspect Mother's",
                "event":"dead_mother",
                "description": "She Doesnt appear to be breathing?",
                'karma' : 'good'

            },
           

        ],
    },
    "storage_room":{
        visits: 0,
        'name' : 'Storage Room',
        "description": "The Storage room is quite dusty you can barely see a thing",
        "directions":[
            {
                "room": "mothers_room",
                "name":"Mother's Room",
               
            },
            { "room":"storage_room",
                "name":"Storage Room",
               
            },
            {
                "room":"outside",
                "name":"Outside"
            }
        ],
        
        "inspects": [
            {
            "guard" : true,
            "need" : 'matches',
            "event": "light_storage",
            "description": "It's so dark.. Maybe some matches?",
            'karma' : 'good'
            }
        ]

        
    },
    "outside":{
        visits: 0,
        'name' : 'Outside',
        "description":"You see before you the fields of your father's farm ablaze. Orcs hanging from roofs, lighting haystacks with torches and the chants of Black Speech forbidden in your land. The",
        "directions":[
            {
                "room":"stables",
                "name":"Parents Stables",
                "color" : 'red'
            }, 
            {
                "room":"gaffer_thomas_house",
                "name":"Gaffer Thomas House",
                "color" : 'brown'
            }, 
            {
                "room":"neighbors",
                "name":"BrandyBuck Home",
                "color" : 'orange'
            }, 
            {
                "room":"home_return",
                "name":"Grab A Weapon From Your Home!",
                "color" : 'green'
            }, 


        ]
    },
    "neighbors":{
        "name" : 'BrandyBuck Home',
        "description":"You see before you the fields of your father's farm ablaze. Orcs hanging from roofs, lighting haystacks with torches and the chants of Black Speech forbidden in your land. The",
        "directions":[
            {
                "direction":"Back Inside",
                "room":"home"
            }, 
            {
                "direction":"Back Inside",
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

