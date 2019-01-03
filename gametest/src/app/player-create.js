



class Player {

    constructor(name) {
        this.name = 'Nina';
        this.lvl = 1;
        this.avatar = '/assets/characters/human.png',
        this.health = 100;
        this.strength = 10;
        this.speed = 5;
        this.race = 'Human'
        this.gold = 10;
        this.bag = [];
        this.backstory = "You are a lonely traveler."
        this.weapon = null;
        this.karma = 0;  
        this.reputation = 0;
        this.charisma = 0;
        this.worldPoint = [];
        this.spellbook = [];
        this.hometown = null;
        this.eventLog = [],
        this.battleLog = [],
        this.healthColor = 'green',
        this.healthimages = [],
        this.healthTiers =  [
            { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
            { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
            { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
            { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
        ],
        this.deadImg = '/assets/characters/elf/elf-red.png',
        this.states = {
            healthState : { change: null, val: null, increase: '+' , decrease: '-'},
            luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
            strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
            speed: { change: null, val: null, increase: '+' , decrease: '-'},
            karma: { change: null, val: null, increase: '+' , decrease: '-'},
         };
        }
  
    }
  
    class Human extends Player {

        constructor(name) {
            super(name);
            this.race = 'Human';
            this.avatar = '/assets/characters/human.png',
            this.name = name;
            this.health = 100;
            this.strength = 8;
            this.speed = 3;
            this.gold = 10;
            this.karma = 3;
            this.reputation = 0;
            this.bag = [];
            this.backstory = "You are a lonely traveler from the Kingdom of Denethor. Born and raised in this presiding town. "
            this.weapon = null;  
            this.worldPoint = [];
            this.hometown = "Denathor";
            this.eventLog = [],
            this.battleLog = [],
            this.healthColor = 'green',
            this.healthimages = [],
            this.healthTiers =  [
                { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
                { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
                { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
                { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
            ],
            this.deadImg = '/assets/characters/elf/elf-dead.png',
            this.states = {
                healthState : { change: null, val: null, increase: '+' , decrease: '-'},
                luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
                strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
                speed: { change: null, val: null, increase: '+' , decrease: '-'},
                karma: { change: null, val: null, increase: '+' , decrease: '-'},
             };
            }
    
        }
  
  class Ninja extends Player {
        constructor(name) {
            super(name);
            this.race = 'Ninja';
            this.avatar = '/assets/characters/human.png',
            this.name = name;
            this.health = 100;
            this.strength = 3;
            this.speed = 3;
            this.race = race
            this.gold = 10;
            this.karma = 0;
            this.reputation = 0;
            this.bag = [];
            this.backstory = "You are a lonely traveler who's a fuggin Ninja"
            this.weapon = null;  
            this.worldPoint = [];
            this.hometown = "The Black Citadel";
            this.eventLog = [],
            this.battleLog = [],
            this.healthColor = 'green',
            this.healthimages = [],
            this.healthTiers =  [
                { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
                { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
                { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
                { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
            ],
            this.deadImg = '/assets/characters/elf/elf-dead.png',
            this.states = {
                healthState : { change: null, val: null, increase: '+' , decrease: '-'},
                luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
                strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
                speed: { change: null, val: null, increase: '+' , decrease: '-'},
                karma: { change: null, val: null, increase: '+' , decrease: '-'},
             };
        }
    }

    class Dwarf extends Player {
        constructor(name) {
            super(name);
            this.race = 'Dwarf';
            this.avatar = '/assets/characters/male-dwarf.png',
            this.name = name;
            this.health = 140;
            this.strength = 14;
            this.speed = 10;
            this.gold = 10;
            this.karma = 0;
            this.reputation = 0;
            this.bag = ['Mead', 'Sturdy Horned Helmet'];
            this.backstory = "You are a lonely traveler from the mines of Moria"
            this.weapon = null;  
            this.worldPoint = [];
            this.hometown = "The Barren Mines";
            this.eventLog = [],
            this.battleLog = [],
            this.healthColor = 'green',
            this.healthimages = [],
            this.healthTiers =  [
                { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
                { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
                { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
                { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
            ],
            this.deadImg = '/assets/characters/elf/elf-dead.png',
            this.states = {
                healthState : { change: null, val: null, increase: '+' , decrease: '-'},
                luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
                strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
                speed: { change: null, val: null, increase: '+' , decrease: '-'},
                karma: { change: null, val: null, increase: '+' , decrease: '-'},
             };
            }
        }
  
    class Wizard extends Player {
        constructor(name) {
            super(name);
            this.race = 'Wizard';
            this.avatar = '/assets/characters/wizard.png',
            this.health = 90;
            this.strength = 6;
            this.speed = 10;
            this.wisdom = 15;
            this.gold = 10;
            this.bag =  [];
            this.karma = 0;
            this.reputation = 5;
            this.backstory = "You are a lonely traveler who got a little senile and lost his way in the mountains."
            this.weapon = null;
            this.spellbook = [];
            this.worldPoint = [];
            this.hometown = "The Misty Mountains";
            this.eventLog = [],
            this.battleLog = [],
            this.healthColor = 'green',
            this.healthimages = [],
            this.healthTiers =  [
                { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
                { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
                { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
                { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
            ],
            this.deadImg = '/assets/characters/elf/elf-dead.png',
            this.states = {
                healthState : { change: null, val: null, increase: '+' , decrease: '-'},
                luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
                strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
                speed: { change: null, val: null, increase: '+' , decrease: '-'},
                karma: { change: null, val: null, increase: '+' , decrease: '-'},
             };
            }
    }

    class Orc extends Player {
        constructor(name) {
            super(name);
            this.race = 'Orc';
            this.health = 90;
            this.avatar = '/assets/characters/orc.png',
            this.strength = 14;
            this.speed = 10;
            this.wisdom = 6;
            this.gold = 10;
            this.karma = 0;
            this.reputation = 1;
            this.bag =  []
            this.backstory = "You are a lonely traveler who was taken in by Humans and raised out of the Black Lands. You bear the marks on your chest of Mordoria, but dress to fit in amoung the race of men."
            this.weapon = null;
            this.worldPoint = [];
            this.hometown = "Mordoria";
            this.eventLog = [],
            this.battleLog = [],
            this.healthColor = 'green',
            this.healthimages = [],
            this.healthTiers =  [
                { minHealth: 61, maxHealth: 80, color: 'green', image: '/assets/characters/baravder/enemy-baravder.png'},
                { minHealth: 41, maxHealth: 60, color: 'orange', image: '/assets/characters/baravder/baravder-orange.png'},
                { minHealth: 21, maxHealth: 40, color: 'yellow', image:'/assets/characters/baravder/baravder-yellow.png' },
                { minHealth: 1, maxHealth: 20, color: 'red', image: '/assets/characters/baravder/baravder-red.png' },
            ],
            this.deadImg = '/assets/characters/elf/elf-dead.png',
            this.states = {
                healthState : { change: null, val: null, increase: '+' , decrease: '-'},
                luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
                strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
                speed: { change: null, val: null, increase: '+' , decrease: '-'},
                karma: { change: null, val: null, increase: '+' , decrease: '-'},
             };
            }
        }


  class Elf extends Player {
        constructor(name) {
            super(name);
            this.name = name;
            this.avatar = '/assets/characters/elf.png',
            this.health = 110;
            this.strength = 5;
            this.speed = 10;
            this.race = 'Elf';
            this.karma = 0;
            this.reputation = 10;
            this.gold = 15;
            this.bag = [];
            this.backstory = `You are a sharp traveler born into elvish wealth. Highly intelligent and posessing keen speed, elves have a high reputation and can talk themselves out of almost every situation `;
            this.weapon = null;
            this.state = null;
            this.worldPoint = [];
            this.hometown = "The Misty Forest";
            this.eventLog = [],
            this.battleLog = [],
            this.healthColor = 'green',
            this.healthimages = [],
            this.healthTiers =  [
                { minHealth: 81, maxHealth: 150, color: 'green', image: '/assets/characters/elf/elf-green.png'},
                { minHealth: 55, maxHealth: 80, color: 'orange', image: '/assets/characters/elf/elf-orange.png'},
                { minHealth: 30, maxHealth: 54, color: 'yellow', image:'/assets/characters/elf/elf-yellow.png' },
                { minHealth: 1, maxHealth: 30, color: 'red', image: '/assets/characters/elf/elf-red.png' },
                { minHealth: -100, maxHealth: 0, color: 'red', image: '/assets/characters/elf/elf-dead.png' },

            ],
            this.states = {
                healthState : { change: null, val: null, increase: '+' , decrease: '-'},
                luckState :{ change: null, val: null, increase: '+' , decrease: '-'},
                strengthState: { change: null, val: null, increase: '+' , decrease: '-'},
                speed: { change: null, val: null, increase: '+' , decrease: '-'},
                karma: { change: null, val: null, increase: '+' , decrease: '-'},
             };
        }
    }
   
  export { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc }




