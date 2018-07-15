const events = {
}
const SecondWorldStart = {
    "name": "Outside Of CHARHOMETOWN",
    'world_description' : 'You are in outside your hometown of CHARHOMETOWN.',
    "imageUrl":"../../assets/world-background/town.jpg",
    "wizards_hut" : {
        "eventtriggerchance" : null,
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
            // {
            //     "name":"Slam Fist On Door",
            //     "room":"storage_room",
            //     "description" : 'there could be supplies inside... It might be useful to inspect.'
            // },
         
          
        ], // take out

    },
    "wizards_hut_inside" : {
        "eventtriggerchance" : null,
        'update_message': null,
        "name": "Wizard's Hut",
        'influence_event': null,
        "description":`The door creaks open slowly and NINA HASNT PROGRAMMED THIS FAR IN THE GAME YET `,
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