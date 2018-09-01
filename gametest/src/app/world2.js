const events = {

    "wizards_hut_inside_force_brute" : {

    },
    "wizards_hut_inside_force_magic" : {

    }



}
const SecondWorldStart = {
    "name": "Outside Of CHARHOMETOWN",
    'world_description' : 'You are in outside your hometown of CHARHOMETOWN.',
    "imageUrl":"../../assets/world-background/town.jpg",
    "wizards_hut" : {
        'update_message': null,
        "name": "Wizard's Hut",
        'influence_event': null,
        "description":`You are outside your hometown. The sun is beginning to rise in the East and you can see the flickering of raw Magicka behind a wooden huts window. You yell for help. `,
        "directions": [
            {
                "name":"Knock on Door",
                "room": "wizards_hut_inside",
                "description" : 'You the incantations being performed inside.'
            },
            {
                "name":"Leave",
                "room": "leaving_wizards_hut",
                "description" : 'No time to waste! You must warn this wizard before it iss too late'
            },
          
        ], 
        "inspects": [
            {
                "guard" : false,
                "name":"Slam Fist On Door",
                "event": "wizards_hut_inside_force_brute",
                "description" : 'You shall let yourself in',
                "eradicate" : 'Aminrah',
                   
            },
            {
                "guard" : true,
                "name":"Perform Lockpicking Spell",
                "event": "wizards_hut_inside_force_magic",
                "description" : 'You shall let yourself in. If the wizard has a problem then you will deal with him',
                "needs" : 'Aminrah',
            },
          
        ],

    },

    "wizards_hut_inside" : {
        'update_message': null,
        "name": "Wizard's Hut",
        'influence_event': null,
        "description":"You knock gingerly. The Incantations stop. You hear a shuffling from inside and a voice below, 'In all of CHARHOMETOWN Peril, Who disturbs me this night? It best not be for nil!'. You reply, 'It is I, CHARNAME of CHARHOMETOWN . The western gates of CHARHOMETOWN burn by the hands of pillaging Orcs. Alliances sent by the likes of ...a wizard.' ",
        "directions": [
            // {
            //     "name":"Mother's Room",
            //     "room": "mothers_room",
            //     "description" : 'there are footsteps rustling behind the door, sound of moaning and a window shutting.'
            // },
            // {
            //     "name":"Storage Room",
            //     "room":"storage_room",
            //     "description" : 'there could be supplies inside... It might be useful to inspect.'
            // },
            // {
            //     "name":"Outside",
            //     "room":"outside",
            //     "description" : 'I have to see what is happening out there.'
            // },
          
        ], // take out
    },
}
export { events, SecondWorldStart}