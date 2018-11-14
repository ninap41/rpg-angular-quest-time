import { weapons, items } from './item-create';
import { npcs } from './npc-create';
import { Wizard,  Ninja, Elf, Dwarf, Human, Orc, Player} from '../player-create';


const orc_knife = weapons.basic_weapons[0];

const enemies= {
    'baravder' : {
        'name': 'Baravder The Orc',
        'img' : '/assets/characters/baravder/enemy-baravder.png',
        'loss_message': 'Baravder came down with one final swing. You collapse in your own blood, gasping for words. Baravder crouches down and hisses, "Prepare to join your mother...", before your surroundings fade to black.',
        'xp': 120,
        'race' : 'Orc',
        'lvl' : 2,
        'health' : 80,
        'description': `He's a big ugly boy`,
        'opening_line': `"I saw you through the window you poor bastard. I'm going to gut you like your mother. Come here!"`,
        'speed' : 4,
        'gold' : 10,
        'damage' : 5,
        'weapon' : orc_knife,
        'flee_chance': 3,
        'healthColor' : 'green',
        'healthTiers' : [
            { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
            { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
            { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
            { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
        ],
        'deadimg' : '/assets/characters/baravder/baravder-dead.png'



    },
    'yikmar' : {
        'name': 'Yikmar',
        'loss_message': 'Yikmar guts you like a pig and spits on your corpse. Damn you suck at this.',
        'img' : '/assets/characters/enemy-yikmar.png',
        'xp': 80,
        'race' : 'Orc',
        'lvl' : 3,
        'health' : 50,
        'description': `He's twice the size of all the other orcs and wears plated armor. His stamina is weak tho`,
        'opening_line': `"Oh, Hello. Does the little CHARRACE want to make an escape?"`,
        'speed' : 6,
        'gold' : 80,
        'damage' : 5,
        'weapon' : orc_knife,
        'flee_chance': 8,
        'healthColor' : 'green',
        'healthTier' : [
            { minHealth: 41, maxHealth: 50, color: 'green' },
            { minHealth: 31, maxHealth: 40, color: 'orange' },
            { minHealth: 21, maxHealth: 30, color: 'yellow' },
            { minHealth: 1, maxHealth: 20, color: 'red' }
        ],
        'healthImages': [],


    },
    'mordorian_runt' : {
        'name': 'Caleth The Mordorian Runt',
        'loss_message': 'Caleth delivers one last sneaky swipe, splitting your abdomen with his knife. You double over and collapse. Gaffer shaking fearful beside you. Caleth spits, "This is the end of you, haha...".',
        'img' : '/assets/characters/enemy-caleth.png',
        'xp': 80,
        'race' : 'Orc',
        'lvl' : 3,
        'health' : 60,
        'description': `He has teeth, a snarled mouth, and a hook nose. The nails on his right hand appear sharpened.`,
        'opening_line': `"Oh, Hello. Does the little CHARRACE want to make an escape?"`,
        'speed' : 4,
        'gold' : 25,
        'damage' : 7,
        'weapon' : orc_knife,
        'flee_chance': 5,
        'healthColor' : 'green',
        'healthTier' : [
            { minHealth: 46, maxHealth: 60, color: 'green' },
            { minHealth: 31, maxHealth: 45, color: 'orange' },
            { minHealth: 16, maxHealth: 30, color: 'yellow' },
            { minHealth: 1, maxHealth: 15, color: 'red' }
        ],
        'healthImages': [],


    },
    'the_rider' : {
        'name': 'Agmar the Orc Rider',
        'loss_message': `Agmar's steed squels, raises it's hoof and comes down on you. Mendel whimpering abandoned and alone at your failure to defend him. Agmar pierces your chest with his blade.`,
        'img' : '/assets/characters/enemy-the-rider.png',
        'xp': 100,
        'race' : 'Orc',
        'lvl' : 4,
        'health' : 130,
        'description': `He is cloaked. His armor gnarled. His horse's eyes Red. `,
        'opening_line': `Get out of the way, CHARRACE. Or I will slay you too.`,
        'speed' : 4,
        'gold' : 100,
        'damage' : 10,
        'weapon' : orc_knife,
        'flee_chance': 10,
        'healthColor' : 'green',
        'healthTier' : [
            { minHealth: 101, maxHealth: 130, color: 'green' },
            { minHealth: 71, maxHealth: 100, color: 'orange' },
            { minHealth: 41, maxHealth: 70, color: 'yellow' },
            { minHealth: 1, maxHealth: 41, color: 'red' }
        ],
        'healthImages': [],


    },
    'gaffer' : {
        'name': 'Gaffer The Back-Stabbing Coward',
        'img' : '/assets/characters/oldgaffer.png',
        'loss_message': `Gaffer gasps as you fall over him, his blade pierces your chest. You slowly sink down as horror fills his eyes. You whisper to yourself... '' You.... You... Bitchhhhhh....''. Who loses to Gaffer? `,
        'xp': 150,
        'race' : 'Human',
        'lvl' : 3,
        'health' : 50,
        'description': `He's your life long friend. But he made a grave mistake. You simply must take his life.`,
        'opening_line': `No! No! Please, No!`,
        'speed' : 6,
        'gold' : 300,
        'damage' : 8,
        'weapon' : orc_knife,
        'flee_chance': 20,
        'healthColor' : 'green',
        'healthTier' : [
            { minHealth: 41, maxHealth: 50, color: 'green' },
            { minHealth: 31, maxHealth: 40, color: 'orange' },
            { minHealth: 21, maxHealth: 30, color: 'yellow' },
            { minHealth: 1, maxHealth: 20, color: 'red' }
        ],
        'healthImages': [],


    },
}

export { enemies };