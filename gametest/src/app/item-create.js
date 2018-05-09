
    const weapons = {
        "basic_weapons" : [
              {
                'id' : Math.floor(Math.random() * 10000000000),

                'type' : 'weapon',
                'name' : 'Orc Shiving Knife',
                'lvl' :1 ,
                'damage' : 3,
                'karma_effect' : {
                    'type' : 'negative',
                    'effect' : 5,
                    'name': 'Blood Curse',
                    'description' : '-5 karma... Blood of a 24 Orcs have been laid upon this blade.',
                },
                'durability' : 8,
                'description' : 'Still stained with your mothers blood, this is a cruel weapon.',
                'equipped': false,
            },
            {

                'id' : Math.floor(Math.random() * 10000000000),

                'type' : 'weapon',
                'name' : 'Staff of Light',
                'lvl' :1 ,
                'damage' : 4,
                'karma_effect' : {
                    'type' : 'positive',
                    'effect' : 10,
                    'name': 'Mountain Light',
                    'description' : '+10 karma, blessed by the greyboeards in the mountains.',
                },
                'durability' : 6,
                'description' : 'A shimmering at the head of the staff draws in your attention. You feel calm and powerful.',
                'equipped': false,
            },
            {
                'id' : Math.floor(Math.random() * 10000000000),

                'type' : 'weapon',
                'name' : 'Staff of Dark',
                'lvl' :1 ,
                'damage' : 7,
                'karma_effect' : {
                    'type' : 'negative',
                    'effect' : 10,
                    'name': 'Black Magic Curse',
                    'description' : '-10 karma',
                },
                'durability' : 6,
                'description' : 'The edges are rough. They cut into your fingers. This is an abrasive, yet powerful weapon. It fights light.',
                'equipped': false,
            },
            {
                'id' : Math.floor(Math.random() * 10000000000),

                'type' : 'weapon',
                'name' : `Father's Sword`,
                'lvl' :1 ,
                'damage' : 4,
                'karma_effect' : {
                    'type' : 'positive',
                    'effect' : 5,
                    'name': 'Inherited Courage',
                    'description' : '+5 to your karma. It has seen better days, but you feel its history in the kilt',
                },
                'durability' : 14,
                'description' : 'Gazing upon it you feel the memory of your Father creeping back. It fills you with strength',
                'equipped': false,
            },
            {
                'id' : Math.floor(Math.random() * 10000000000),

                'type' : 'weapon',
                'name' : `Father's Bow`,
                'lvl' :1 ,
                'damage' : 4,
                'karma_effect' : {
                    'type' : 'positive',
                    'effect' : 7,
                    'name': 'Courage',
                    'description' : '+7 Karma. Your fallen father had eyesight of a hawk. You feel this weapons history in the wood.',
                },
                'durability' : 14,
                'description' : 'Gazing upon it you feel the memory of your Father creeping back. It fills you with strength',
                'equipped': false,
            },
            {
                'id' : Math.floor(Math.random() * 10000000000),
                'type' : 'weapon',
                'name' : `Father's Axe`,
                'lvl' :1 ,
                'damage' : 4,
                'karma_effect' : {
                    'type' : 'positive',
                    'effect' : 6,
                    'name': 'Dwarven Courage',
                    'description' : '+6 karma for your fathers power still residing in the weapon',
                    'equipped': false,
                },
                'durability' : 14,
                'description' : 'Gazing upon it you feel the memory of your Father creeping back. It fills you with strength'
            },
         
        ],
     

    }


    const items = {
        'matches' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'scenario',
            "value" : 'matches',
            "name" : 'Matches',
            'type' : 'scenario',
            'limit' : true,
            'qty' : 3,
            "description" : `Used to light places.`,
            
        },
        'liquid_courage' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'usable',
            "value" : 'liquid_courage',
            "name" : 'Liquid Courage',
            'influence' : 'positive',
            'influence_impact' : 10,
            'influence_stat' : 'health',
            'limit' : true,
            'qty' : 1,
            "description" : `A little something to boost morale and get you through the day. Increased HP by 10`,
            
        },
        'bread' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'usable',
            "value" : 'liquid_courage',
            "name" : 'CHARHOMETOWN Bread',
            'influence' : 'positive',
            'influence_impact' : 5,
            'influence_stat' : 'health',
            'limit' : true,
            'qty' : 1,
            "description" : `Bread of your people. Reminds you of your home.`,
        },
        'potion_of_luck' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'usable',
            "value" : 'potion_of_luck',
            "name" : 'Potion of Luck',
            'damage' : 3,
            'limit' : true,
            'qty' : 1,
            "description" : `A potion that increases Karma by 10. (Bad events trigger less when karma is high)`,
        },
        'book_of_fire_spell' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'spell',
            "value" : 'book_of_fire_spell',
            "name" : 'Book of basic Fire Spell',
            'influence_type' : 'offensive', // defensive is other
            'damage' : 4,
            'spell_type': 'offensive',
            'limit' : true,
            'qty' : 1,
            "description" : `A spell that can inflicts +4 damage to enemy each turn`,
        },

               
    }


    export { weapons, items};
//     'karma_effect' : {
//         'type' : 'negative',
//         'effect' : 5,
//         'name': 'Blood Curse',
//         'description' : '-5 karma... Blood of a 24 Orcs have been laid upon this blade.',
//     },
//     'durability' : 8,
//     'description' : 'Still stained with your mothers blood, this is a cruel weapon.'
// },