
class Player {
  
    constructor(name) {
        this.name = 'Nina';
        this.lvl = 1;
        this.health = 100;
        this.strength = 10;
        this.speed = 5;
        this.race = 'Human'
        this.gold = 10;
        this.bag = [];
        this.backstory = "You are a lonely traveler."
        this.weapon = null;
        this.karma = null;  
        this.reputation = 0;

        this.worldPoint = [];
        this.spellbook = null;
        this.hometown = null;
     }
  
    }
  
    class Human extends Player {

        constructor(name) {
            super(name);
            this.race = 'Human';
            this.name = name;
            this.health = 100;
            this.strength = 3;
            this.speed = 3;
            this.gold = 10;
            this.karma = 0;
            this.reputation = 0;


            this.bag = [];
            this.backstory = "You are You are a lonely traveler from the Kingdom of Denethor. Born and raised in this presiding town. "
            this.weapon = null;  
            this.worldPoint = [];
            this.hometown = "Denathor";
            }
    
        }
  
  class Ninja extends Player {
 

    constructor(name) {
        super(name);
        this.race = 'Ninja';

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
    }

    

    

    }
    class Dwarf extends Player {

        constructor(name) {
            super(name);
            this.race = 'Dwarf';
            this.name = name;
            this.health = 140;
            this.strength = 10;
            this.speed = 10;
            this.gold = 10;
            this.karma = 0;
            this.reputation = 0;


            this.bag = ['Mead', 'Sturdy Horned Helmet'];
            this.backstory = "You are a lonely traveler from the mines of Moria"
            this.weapon = null;  
            this.worldPoint = [];
            this.hometown = "Barren Mines";
            }

        }
  
    class Wizard extends Player {
  
    constructor(name) {
        super(name);
        this.race = 'Wizard';
        this.health = 90;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 15;
        this.gold = 10;
        this.bag =  [];

        this.karma = 0;
        this.reputation = 0;

        this.backstory = "You are a lonely traveler who got a little senile and lost his way in the mountains."
        this.weapon = null;
        this.spellbook = [];
        this.worldPoint = [];
        this.hometown = "Misty Mountains";
        
        }
        
    }
    class Orc extends Player {
  
        constructor(name) {
            super(name);
            this.race = 'Orc';
            this.health = 90;
            this.strength = 14;
            this.speed = 10;
            this.wisdom = 6;
            this.gold = 10;
            this.karma = 0;
            this.reputation = 0;
            this.bag =  []
            this.backstory = "You are a lonely traveler who was taken in by Humans and raised out of the Black Lands. You bear the marks on your chest of Mordoria, but dress to fit in amoung the race of men."
            this.weapon = 'Mallet';
            this.worldPoint = [];
            this.hometown = "Mordoria";
            }
         
            
        }


  class Elf extends Player {

    constructor(name) {
        super(name);
        this.name = name;

        this.health = 110;
        this.strength = 5;
        this.speed = 10;
        this.race = 'Elf';
        this.karma = 0;
        this.reputation = 10;
        this.gold = 15;
        this.bag = [];
        this.backstory = `You are a sharp traveler born into elvish wealth. Highly intelligent and posessing keen speed, they have a high reputation and can talk themselves out of almost every situation `;
        this.weapon = null;
        this.state = null;
        this.worldPoint = [];
        this.hometown = "Misty Forest";

       

    }
   

    }
  



  
   
  export { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc }




