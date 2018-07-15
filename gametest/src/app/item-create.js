
    const weapons = {
        "basic_weapons" : [
              {
                'id' : Math.floor(Math.random() * 10000000000),

                'type' : 'weapon',
                'name' : 'Orc Shiving Knife',
                'value' : 'Orc Shiving Knife',
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
                    'effect' : 7,
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
                    'effect' : 7,
                    'name': 'Black Magic Curse',
                    'description' : '-10 karma',
                },
                'durability' : 6,
                'description' : 'The edges are rough. They cut into your fingers. This is an abrasive, yet powerful weapon. It fights light.',
                'equipped': false,
            },
            {
                'id' : Math.floor(Math.random() * 10000000000),
                'img' : '/assets/weapons/fatherssword.jpg',
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
                'karma_effect' : {
                    'type' : 'negative',
                    'effect' : 1,
                    'name': 'Blood Curse',
                    'description' : '-5 karma... Blood of a 24 Orcs have been laid upon this blade.',
                },
                'type' : 'weapon',
                'name' : `Mordorian Sword`,
                'lvl' :1 ,
                'damage' : 8,
                'durability' : 14,
                'description' : 'A sword forged with Obsidian shards. ',
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
            {
                'id' : Math.floor(Math.random() * 10000000000),    // 8th weapon
                'type' : 'weapon',
                'name' : `Rusty Blade`,
                'lvl' :1 ,
                'damage' : 2,
                'karma_effect' : {
                    'type' : 'negative',
                    'effect' : -2,
                    'name': 'Rusty Courage',
                    'description' : '-2 to Karma if this is your first weopon. Merely a pocket knife.',
                    'equipped': false,
                },
                'durability' : 10,
                'description' : 'Leaves rust stains in your pocket. Absolutely SHIT weapon.'
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
        'stable_key' : {
            'id' : Math.floor(Math.random() * 10000000000),
            'type' : 'scenario',
            "value" : 'stable_key',
            "name" : 'Stable Key',
            'type' : 'scenario',
            'limit' : true,
            'qty' : 1,
            "description" : `Key to your parents stables. Found in the sneaky halflings grubby palms!`,
            
        },
        'Orc Shiving Knife' : 
            {
                'id' : Math.floor(Math.random() * 10000000000),
                'value' : 'Orc Shiving Knife',
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
        
        'helpbook' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'help',
            "value" : 'helpbook',
            "name" : 'Help Book',
            'influence_karma' : ['positive', 5],
            'limit' : false,
            'qty' : 1,
            'update_message' : 'Reading that felt better. +5 to karma',
            "description" : `A help book for a dingus who has never played an rpg. Check your Nav bar.`,
            
        },
        'gaffers_letter' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'scenario',
            "value" : 'gaffers_letter',
            "name" : `Gaffer's Letter`,
            'influence_karma' : ['positive', 5],
            'limit' : false,
            'qty' : 1,
            'update_message' : 'Reading that felt better. +5 to karma',
            "description" : ` 
            Dear Loved One, 

                I apologize for all my shortcomings. The Orcs would not be here if it were not for me. 
            The dark wizard promised my family safety if I but give him my father ancient summoning 
            charm to break down our towns magic defenses. Little did I know he needed the blood of 50
            innocents for his conjuring. If anyone finds this...
            
            To CHARNAME, I have loved you with all my heart since we were children. Please forgive me... 
             
            Love, 
                Thomas Gaffer.`,

            
        },
        'mendels_key' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'scenario',
            "value" : 'mendels_key',
            "name" : `Brandybuck Key`,
            'influence_karma' : ['positive', 2],
            'limit' : false,
            'qty' : 1,
            "description" : `Key to the Brandybuck Home's backdoor`,

            
        },
        'stables_key' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'scenario',
            "value" : 'stables_key',
            "name" : `Stables_Key`,
            'influence_karma' : ['positive', 2],
            'limit' : false,
            'qty' : 1,
            "description" : `Key to the stables`,

            
        },
        'liquid_courage' : {
            'id' : Math.floor(Math.random() * 10000000000),

            'type' : 'usable',
            "value" : 'liquid_courage',
            "name" : 'Liquid Courage',
            'influence_health' : ['positive', 10],
            'influence_karma' : ['positive', 4],
            'limit' : true,
            'qty' : 2,
            "description" : `A little something to boost morale and get you through the day. Increased HP by 10`,
        },
        'bread' : {
            'id' : Math.floor(Math.random() * 10000000000),
            'type' : 'usable',
            "value" : 'bread',
            "name" : 'Bread',
            'influence_health' : ['positive', 10],
            'limit' : true,
            'qty' : 1,
            "description" : `Bread of your people. Reminds you of your home.`,
        },
        'cheese' : {
            'id' : Math.floor(Math.random() * 10000000000),
            'type' : 'usable',
            "value" : 'cheese',
            "name" : 'Cheese',
            'influence_health' : ['positive', 50],
            'limit' : true,
            'qty' : 1,
            "description" : `Brie cheese of your people.`,
            'img' : 'assets/cheese.jpg'
        },
        'potion_of_luck' : {
            'id' : Math.floor(Math.random() * 10000000000),
            'type' : 'usable',
            "value" : 'potion_of_luck',
            "name" : 'Potion of Luck',
            'influence_karma' : ['positive', 5],
            'limit' : true,
            'qty' : 3,
            "description" : `A potion that increases Karma by 10. (Bad events trigger less when karma is high)`,
        },
        'potion_of_healing' : {
            'id' : Math.floor(Math.random() * 10000000000),
            'type' : 'usable',
            "value" : 'potion_of_healing',
            "name" : 'Potion of Healing',
            'influence_health' : ['positive', 20],
            'limit' : true,
            'qty' : 1,
            "description" : `This potion will heal you by +20 HP`,
        },
        'book_of_fire_spell' : {
            'id' : Math.floor(Math.random() * 10000000000),
            'type' : 'spell',
            "value" : 'book_of_fire_spell',
            "name" : 'Book of basic Fire Spell',
            'influence_damage' : ['health', 4],
            'limit' : true,
            'qty' : 1,
            "description" : `A spell that can inflicts +4 damage to enemy each use`,
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