
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
        'xp': 75,
        'race' : 'Orc',
        'lvl' : 2,
        'health' : 80,
        'description': `He's a big ugly boy`,
        'opening_line': `"I saw you through the window you poor bastard. I'm going to gut you like your mother. Come here!"`,
        'speed' : 4,
        'gold' : 10,
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
        'influence_event': null,

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
                'karma_impact': ['positive', 1],
                'name': 'Storage Room',
                'description' : 'Now that you have those matches...',
                'room' : 'storage_room'
            }
        ]

    },

    "local_storage" : {    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
        'update_message': null,
        'event_state' : true,
        'influence_event': null,
        "name":"A light in dark places",
        "description" : 'You illuminate the storage closet to see supplies. A a few vials and a book. You dont have time to think, just take them.',
        'inspects' : [
            {
            'guard' : false,
            'name' : 'Mysterious Vial',
            'influence_event': null,

            'object' : items.potion_of_luck,
            'event' :'take',
            'description' : `You have no idea what this is but it's glowing bright green.`
            },
            {
                'guard' : false,
                'name' : 'Grab Book',
                'influence_event': null,

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

    "gaffers_room_bedside" : {    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
        'update_message': null,
        'event_state' : true,
        'influence_event': null,
        "name":"A Confession of an Old Friend",
        "description" : 'There on his desk you light a candle. You move it carefully away from the window, duck below his bed, and see fallen under his bed two items: Parchment (Still wet with ink) and a Healing Vial.',
        'inspects' : [
            {
            'guard' : false,
            'name' : 'Potion of Healing',
            'object' : items.potion_of_healing,
            'event' :'take',
            'description' : `It glows bright, bright red!`
            },
            {
                'guard' : false,
                'name' : `Gaffer's Letter`,
                'object' : items.gaffers_letter,
                'event' :'take',
                'description' : `Gaffer's handwriting looks rushed? It reads with a worried hand.`
                }
        ],
        "access_directions_state" : false,
        "directions": [
            { 
                'name': `Back Main Room`,
                'description' : 'Well this was a little dramatic. You read over is letter and are shocked.',
                'room' : 'gaffer_thomas_house'
            },
         
        ]

    },
    "light_storage_hurt" : {    //LOCALSTORAGE EVENT  //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT //LOCALSTORAGE EVENT
        'update_message': null,
        'event_state' : true,
        "name": `A Dark Stumble`,
        'influence_event' : {
            'impact_chance': 4,
            'impact' : ['negative','health', 10],
            'description' :  `Hurt yourself on something you could not see... -10HP`,
            'description2' :  `You almost tripped and hurt yourself on a broom! Lucky for you your karma must have been in your favor.`,

        },
        "description" : 'You feel around the room, this could be dangerous.',
        "access_directions_state" : true,
        "directions": [
            { 
                'karma_impact': ['positive', 1],
                'name': 'Mother?',
                'description' : 'You should really check up on her.',
                'room' : 'mothers_room_revisited'
            },
            { 
                'karma_impact': ['negative', 3],

                'name': 'Outside',
                'description' : 'This was a stupid idea',
                'room' : 'outside2'
            }
        ]

    },
    "firstspawn" : {    
        'enemy' : enemies.baracder,           // FIRSTSPAWN // FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN// FIRSTSPAWN
        'update_message': null,
        'event_state' : true,
        'influence_event': null,

        "name":"First Encounter...",
        "description" : `Enemy Appears, a massive drooling Orc named '${enemies.baracder.name}'. He Carries a ${enemies.baracder.weapon.name} he swings by his belt. He stares you down and says "${enemies.baracder.opening_line}". You have two options to Run or Fight. Its too early in the game to introduce battle dynamics `,
        "description2" : `The Orc you defeated ${enemies.baracder.name} body is limp. you're happy to gaze upon his corpse. You have avenged your mother well.`,
        'enemy_object': null,
        'inspects' : [
            {
            'karma_impact': ['positive', 2],
            'guard' : false,
            'needsweapon': true,
            'name' : 'Fight',
            'event' :'fight',
            'subevent_onevent' : '',
            'description' : 'You may have to battle this big boy'
            },
            {
            'karma_impact': ['negative', 2],
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
                'karma_impact': ['negative', 2],

                'name': 'Run Away into High Brush',
                'description' : 'You willrun into the high grass, some brush may be nice until the morning comes',
                'room' : 'high_brush'
            },
            {
                "room":"stables1",
                "name":"Parents Stables",
                "description" : "A horse would be the perfect way to outrun the orcs.",
                // "color" : 'red'
            }, 
            {
                "room":"gaffer_thomas_house",
                "name":"Gaffer Thomas House",
                "description" : "A possible chance for you to steal some goods. There may not be enough time.",
                // "color" : 'brown'
            }, 
            {
                'karma_impact': ['positive', 1],
                "room":"brandybuck_home",
                "name":"BrandyBuck Home",
                "description" : "The Brandy Bucks are the little folk in town. They are most at risk.",
                // "color" : 'orange'
            }, 
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
        'influence_event': null,

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
            {
                "name":"Outside",
                "room":"outside",
                "description" : 'I have to see what is happening out there.'
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
        'influence_event': null,

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

    "window_ledge" : {
        'update_message': null,
        'influence_event': null,

        "name": "Back of The House",
        "description":`You stretch your CHARRACE legs over the edge of the window. The crackling of fire sounds all around you. You see Gaffer Thomas running toward the stables and a barrel beside you.`,
        "directions": [
            {
                "name":"To the Stables",
                "room": "stables1",
                "description" : `That's where Thomas is heading. Safety in numbers.`
            },
            {
    

                "name": "Through the middle of town",
                "room": "middle_of_town",
                "description" :  `You're feeling rather gallant are'nt you? Maybe some liquid courage? Or is it too risky?`
            }
        ],
        'inspects' : [
            {
            'guard' : false,
            'name' : 'Another Dang Book',
            'object' : items.helpbook,
            'event' :'take',
            'description' : `You see the embroidery catch your eye. "READ THIS BOOK TO NOT SUCK AT THIS GAME". But maybe you're a hardcore player.`
            },
            {
                'guard' : false,
                'name' : 'Mead',
                'object' : items.liquid_courage,
                'event' :'take',
                'description' : `Enemies are all around you is this really the time to drink???`
                }
        ],
        
    },

    "middle_of_town" : {
        'update_message': null,
        "name": "Through The Town!",
        'influence_event': null,

        "description":`You hear Thomas Gaffer calling your name "CHARNAME, what are you doing!`,
        "directions": [
            {
                "name":"Keep going, you see the armory ahead.",
                "room": "armory",
                "description" : `It's not far away, but there is alot of pillaging in your way. An Mordorian Orc eyes you wearily.`
            },
            {
                "name": "To Stables",
                "room": "stables1",
                "description" :  `It would be an easy sprint backward to the horses.`
            }
        ]
    },
    "mothers_room":{
        'update_message': null,
        "name" : "Mother's room",
        'influence_event': null,

        "description": "Your mother is asleep in her bed after a greuling day in the fields. You'd ask her if the village parade was going on outside, but you don't wish to disturb her.",
        "directions": [
            {
                "room": "home",
                "name":"Home Bedroom",
                "description" : "Return the main room? Might be smart.",

               
            },
            { 
                "room":"storage_room",
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
        'influence_event': null,

        "name" : "Mother room",
        "description": "Amidst the commotion, your mother is still asleep. The room is slightly chilled. What should you do?",
        "directions": [
            {
                'karma_impact': ['negative', 3],
                "room": "window_ledge",
                "name":"Forget her. Window escape",
                "description" : "TIP: Actions like this have a negative impact on your Karma. Karma influences your fate.",

  
               
            },
            {  
                 "room":"storage_room",
                "name":"Storage Room?",
                "description" : "Something doesnt feel right... maybe I can arm myself there?",
    

               
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
    "gaffers_room":{
        'update_message': null,
        'influence_event': null,

        'name' : `Gaffer's Room`,
        "description": "It's dimly lit. You do not see any of Gaffer's fam, nor little sister. ",
        "directions":[
  
            {
                'karma_impact': ['negative', 4],
                "room":"gaffers_kitchen",
                "name":"Gaffers Kitchen",
                "description": "You're thinking of stealing some things in case you're feeling faint."

            },
            {
                "room":"outside",
                "name":"Outside",
                "description": "As you twist the knob you hear a scream."

            }
        ],
        "inspects": [
  
                {
                    'karma_impact': ['positive', 3],
                    "guard" : true,
                    "name":"Light Candle",
                    "needs" : 'matches',
                    "event": "gaffers_room_bedside",
                    "description": "You should light the candle at the his bedside to see whats on his table.",
                }
            ],
  
    },
    "storage_room":{
        'update_message': null,
        'influence_event': null,

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
                    'karma_impact': ['positive', 3],
                    "guard" : true,
                    "name":"Light the way",
                    "needs" : 'matches',
                    "event": "local_storage",
                    "description": "You have Matches in your Inventory!",
                }
            ],
  
    },
    "stables1" : {
        'name' : 'Stables',
        'influence_event': null,

        "description":`Keeping your head low beneath the tall grass you come up to the stables gate. Thomas waits beside it. He is shaking. To your dismay 
        there is a lock! You both look at eachother in solem silence... you can see through the planks your favorite horse melody neighing. 
        'It's okay' you whisper, 'I'll be in there soon.' You sigh deeply. You can either find another way or find a key.`,
        "directions":[
            {
                "room": "gaffer_thomas_house",
                "name":"Gaffer Thomas's House",
                "description": "Your heart is beating fast as your hand hovers over the your mother's door handle"
               
            },
           
            {
                "room":"outside2",
                "name":"Outside",
                'event' : 'jarl_slay',
                "description": "Head back out where two Orcs are slaying the town Jarl."
            }
        ],
        "inspects": [
            {
                'karma_impact': ['negative', 1],
                "guard" : false,
                "name": "Make a Plan",
                "eradicate" : `gaffers_letter`,
                "event": "brandy_buck_plan",
                "description": "Work with gaffer to figure out a solution.",
                   

                },
                {
                    'karma_impact': ['positive', 3],
                    "guard" : true,
                    "name":`'I found your letter, Gaffer.`,
                    "needs" : 'gaffers_letter',
                    "event": "gaffer_confrontation",
                    "description": "Confront Gaffer about his letter.",
                },
                {
                    'karma_impact': ['negative', 1],
                    "guard" : false,
                    "name": "Try To Bash Your Way In",
                    "eradicate" : `stables_key`,
                    "event": "mordorian_runt",
                    "description": `You're strong, why not push your way in?`,
                       
    
                    },
                    {
                        'karma_impact': ['positive', 3],
                        "guard" : true,
                        "name":`'Use the Key`,
                        "needs" : 'stables_key',
                        "event": "gaffer_confrontation",
                        "description": "Open the stables and get your horse. ",
                    }
            ],
  
    
    },
    "outside":{

        visits: 0,
        'name' : 'Outside',
        'influence_event': null,

        "description":"You see before you the fields of your father's farm ablaze. Orcs hanging from roofs, lighting haystacks with torches and the chants of Black Speech forbidden in your land.",
        "directions":[
            {
                "room":"stables1",
                "name":"Parents Stables",
                "description": "If the horses have not but run away, you can take one. You pray your horse Grendel is alive and calm.",
                "color" : 'red'
            }, 
            {
                'karma_impact': ['positive', 1],
                "room" : "gaffer_thomas_house",
                "name" : "Gaffer Thomas House",
                'description' : 'Where is your friend thomas?! What if he is hurt?',
                "color" : 'brown'
            }, 
            {
                'karma_impact': ['positive', 1],
                "room": 'brandybuck_home',
                "name":"Brandybuck Home",
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
    "gaffer_thomas_house" : {
        'character' : 'Thomas',
        'influence_event': null,

        'update_message': null,
        "name" : 'Gaffer Thomas Home',
        "description" : `You sneak towards your lifelong friends home, staying towards the town's fences. In the shadow of the Barracks and through the tall grass.
            You get closer to his back porch. And head into the house. You call out for his family, but there is no anaswer. You see two rooms.`,
        "directions":[
            {

                "name":"Gaffer's Room",
                'description': `Vaguely lit by a lantern and quiet inside.`,
                "room":"gaffers_room"
            }, 
            {

                "name":"Back Outside",
                'description': `It's too quiet here and youre getting nervous`,
                "room":"outside2"
            }, 
        ],
        'inspects': [
             
            {
                'karma_impact': ['negative', 1],
                'update_message': null,
                "name":"Inspect Kitchen",
                "event":"kitchen_safebox",
                "description": "You could take some things from his kitchen",
            },
        ],
    },
    "brandybuck_home" : {
        'character' : 'Mendel',
        'update_message': null,
        'influence_event': null,

        "name" : 'BrandyBuck Home',
        "description" : "Scurrying around the front yard is Mendal, Mendal Brandybuck. he is being chased around his yard by an Orc Rider tugging his reins in circles. He hisses to an adjacent comrade who points down in disdain 'The Great Wizard of Barandtuk has orders to burn it to the ground. Not harrass halflings!'. ",
        "directions":[
            {
                "name":"Back Home",
                'description': 'Head Back Home',
                "room":"home"
            }, 
    
        ],
        'inspects': [
             
            {
                'karma_impact': ['positive', 6],
                'update_message': null,
                "name":"Inspect Mendal",
                "event":"fight_the_rider",
                "description": "You must check up on him.",
            },
        ],
    },
    

    // OUTSIDE HOME REALMS  // OUTSIDE HOME REALMS // OUTSIDE HOME REALMS // OUTSIDE HOME REALMS
    "outside2":{
        'eventtriggerchance': 2, //fifty fifty chance
        'event': 'firstspawn',
        'influence_event': null,

        'name' : 'Outside',
        "description":`You stumble out the door nearly bashing into Thomas shouting CHARNAME! Bless your little CHARRACE heart. Make for the next town over as fast as you can. I'll meet you there.`,
        "directions":[
            {
                "room":"stables1",
                "name":"Stables",
                "description" : "A horse would be the perfect way to outrun the orcs.",
                // "color" : 'red'
            }, 
            {
                "room":"gaffer_thomas_house",
                "name":"Gaffer Thomas House",
                "description" : "A possible chance for you to steal some goods. There may not be enough time.",
                // "color" : 'brown'
            }, 
            {
                "room":"brandybuck_home",
                "name":"BrandyBuck Home",
                "description" : "The Brandy Bucks are the little folk in town. They are most at risk.",
                // "color" : 'orange'
            }, 
        


        ]
    },
}





export { HumanWorldStart, events, orc_knife, WorldPlayer, player }

