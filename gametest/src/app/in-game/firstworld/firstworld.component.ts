import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../character.service';
import { BattleService } from '../../battle.service';
import { AudioService } from '../../audio.service';

import { RouterModule, Routes, Router } from '@angular/router';
import { HumanWorldStart, events } from '../../world/world1';
import { SecondWorldStart } from '../../world/world2';

import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from '../../player-create';
import { Animations, routerTransition2, routerTransition, fadeAnimation,  healthTransition} from '../../animate';

@Component({
  selector: 'app-firstworld',
  templateUrl: './firstworld.component.html',
  styleUrls: ['./firstworld.component.scss'],
  animations: [
    healthTransition
  ],
})
export class FirstworldComponent implements OnInit {
Player = new Player;
change = null;

lastspot;
startingPoint; // initial
playersPoint; // current
gameState;
currentworld;
firstworldevents = events;
secondworld;
secondworldevents;
playertest;
currentEvent;
errors;
worldpoint;
WorldName;
updateMessage;
weaponGuard;
xp = 0;
temp_strength;
temp_karma;
temp_speed;
audio;
world_num = 1;
// all of map


  constructor(
    private _characterService: CharacterService,
    private _battleService: BattleService,
    private _audioService: AudioService,

    private _router: Router) {
      this.Player = this._characterService.retrievePlayer();
      this.WorldName = HumanWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);

     }

  ngOnInit() {
    this.weaponGuard = this._battleService.weaponGuard;
    this._characterService.gameStart = true;
    this.Player = this._characterService.retrievePlayer();
    this.playertest = JSON.parse(localStorage.getItem('Player'));
    this.currentworld = HumanWorldStart;
    this.secondworld = SecondWorldStart;
    this.WorldName = HumanWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);
    console.log('PLAYER TEST: '  + this.playertest.name );
    console.log('Length: '  + this.Player.worldPoint.length);
    console.log('content: '  + this.Player.worldPoint);
    if (this.Player.worldPoint.length === 0) {
      // this.Player.worldPoint.push(this.secondworld.wizards_hut);
      // this.playersPoint = this.secondworld.wizards_hut;
      // this.WorldName = SecondWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);

      this.Player.worldPoint.push(this.currentworld.home); // beginning of game
      this.playersPoint = this.currentworld.home; // beginning of game
      this.Check_all();
    } else {
      this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
      this.Check_all();
      this.WorldName = HumanWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);

    }
    console.log( 'this.playersPoint: ' + this.playersPoint +
    'this.playersPoint: ' +  this.Player.worldPoint);
    this.Check_all();

  }

  nextWorld(direction) {
    if (direction.world1_end) {
      this.Player.worldPoint.push(this.secondworld[direction.room]);
      this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
      this.currentworld = this.secondworld;
      this.currentEvent = null;
      this.WorldName = this.currentworld.name.replace('CHARHOMETOWN', this.Player.hometown);
      this.Check_all();
    }

  }

  check_karma() {
    if (this.Player.karma < -9) {
      this.currentEvent = events.end_game;
    }

  }

  Check_all() {
    if (this.currentEvent) {
    this.check_event_name_home(this.currentEvent);
  }
    this.check_name_and_home(this.playersPoint);
    this.check_inspects_guard(this.playersPoint);
    this._battleService.updateHealthColor();

  }

  karma_update(point) {
    if (point.karma_impact[0] === 'negative') {
      this.Player.karma -= point.karma_impact[1];
    } else {
      this.Player.karma += point.karma_impact[1];
    }
    this._battleService.updateHealthColor();
  }
  check_event_name_home(event) {
    if (event) {
      if (event.enemy) {
        event.enemy.description = event.enemy.description.replace('CHARHOMETOWN' , this.Player.hometown); // put in service
        event.enemy.description = event.enemy.description.replace('CHARNAME', this.Player.name);
        event.enemy.description = event.enemy.description.replace('CHARRACE', this.Player.race); // put in service
        event.enemy.opening_line = event.enemy.opening_line.replace('CHARHOMETOWN', this.Player.hometown); // put in service
        event.enemy.opening_line = event.enemy.opening_line.replace('CHARNAME', this.Player.name);
        event.enemy.opening_line = event.enemy.opening_line.replace('CHARRACE', this.Player.race); // put in service
      }
      event.description = event.description.replace('CHARHOMETOWN', this.Player.hometown); // put in service
    event.description = event.description.replace('CHARNAME', this.Player.name);
    event.description = event.description.replace('CHARRACE', this.Player.race); // put in service
    event.description2 = event.description.replace('CHARHOMETOWN', this.Player.hometown); // put in service
    event.description2 = event.description.replace('CHARNAME', this.Player.name);
    event.description2 = event.description.replace('CHARRACE', this.Player.race); // put in service
    }

  }

  check_inspects_guard(point) {
    if (point.inspects) {
      for (const inspect of point.inspects) {
        if (inspect.needsweapon) {
          if (inspect.needsweapon === true) {
            if (this.Player.weapon === null) {
            inspect.needsweapon = true;
            inspect.description = `${this.Player.name}, you must have a weapon equipped in order to fight!`;
            console.log('please equip weapon');
            } else {
              console.log('youre good bro');
            }
          }  else {
          }
        }
        for (var item of this.Player.bag) {
          if (item.value) {
            if (item.value === inspect.needs && item.value) {
              inspect.guard = false;
            }
            if (item.value === inspect.eradicate && item.value) {
              inspect.guard = true;
            }
          }
      }
    }
   }
  }
  activate_help(action) {
    this.check_karma();
    if (action.object.name === 'Help Book') {
      this._characterService.help = true;
    }
  }

  check_name_and_home(point) {
    if (point.description) {
      this.playersPoint.description = this.playersPoint.description.replace('CHARHOMETOWN', this.Player.hometown);
      this.playersPoint.description = this.playersPoint.description.replace('CHARNAME', this.Player.name);
      this.playersPoint.description = this.playersPoint.description.replace('CHARRACE', this.Player.race); // put in service
      }
  }

  traverse(direction) {
  this._battleService.updateHealthColor();

if (direction.audio) {
  console.log(direction.audio);
} // audio service move
if ( direction.world1_end) {
  this.nextWorld(direction);
  this.Check_all();
  this.check_karma();

} else {
    if (direction.karma_impact) {
      this.karma_update(direction);
    }
    console.log('traverse()');
    this._characterService.global_update_message = null;
    this.currentEvent = null;
    this.Player.worldPoint.push(this.currentworld[direction.room]);
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    if (this.playersPoint.eventtriggerchance) {
      const trigger =  Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        this.Check_all();

        console.log('event begun');
      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.Player.worldPoint.push(this.currentworld[direction.room]);
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        this.Check_all();
      }
    }  else if (this.playersPoint.eventtriggerchance === null && this.playersPoint.event !== null) {
      this.currentEvent = this.firstworldevents[this.playersPoint.event];
      console.log('event begun');
      this.Check_all();
    } else {
    this.Check_all();
    this.check_karma();
    }
   }
  }



  traverseFromEvent(direction) {
    if ( direction.world1_end) {
      this.nextWorld(direction);
      this.Check_all();
      this.check_karma();
    } else {
        if (direction.karma_impact) {
          this.karma_update(direction);
        }
        console.log('traverseFromEvent()');
        this.currentEvent = null;
        this._characterService.global_update_message = null;
        this.Player.worldPoint.push(this.currentworld[direction.room]);
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        if (this.playersPoint.eventtriggerchance) {
          const trigger =  Math.floor(Math.random() * this.Player.karma);
          if (trigger < this.playersPoint.eventtriggerchance) {
            console.log('trigger: ' + trigger);
            console.log('this.playersPoint.eventtriggerchance: ' + this.playersPoint.eventtriggerchance);
            this.currentEvent = this.firstworldevents[this.playersPoint.event];
            this.playersPoint.eventtriggerchance = null;
            this.Check_all();


          } else {
            console.log ('event avoided');
            this.currentEvent = null;
            this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
            this.check_name_and_home(this.playersPoint);
            this.check_inspects_guard(this.playersPoint);
            this.check_karma();
          }
        } else {
        this.check_name_and_home(this.playersPoint);
        this.check_inspects_guard(this.playersPoint);
        this.check_karma();
        }
      }
  }

  use_needed_item(action, idx) {
    console.log(' use_needed_item()');
    for (let i = 0; i < this.Player.bag.length; i ++) {
      if (action.needs === this.Player.bag[i].value && this.Player.bag[i].qty > 0) {
        if (this.Player.bag[i].limit === true) {
          this.Player.bag[i].qty  -= 1;
          if (this.Player.bag[i].qty === 0) {
            const usedItem = this.Player.bag[i].name;
            this.Player.bag.splice(i, 1);
            this.playersPoint.inspects[idx].guard = true; // gets rid of event if you run out of things;
            this.playersPoint.update_message = `You used the last of the ${usedItem}.`;
            return false;
          }
        } else {
          console.log('permanent item');
        }
        if (this.Player.bag[i].use_sound) {
          this._audioService.random_sound(this.Player.bag[i].use_sound);
        }
      }
    }
  }

  inspectWorld(action, idx) {
    this._battleService.updateHealthColor();
    if (action.karma_impact) {
      this.karma_update(action);
    }
    this.check_karma();
    console.log('inspectWorld()');

    if (this.playersPoint.eventtriggerchance) {
      const trigger =  Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        console.log(this.currentEvent);
        this.Check_all();
        console.log('event begun');
      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.Player.worldPoint.push(this.currentworld[action.room]);
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        this.Check_all();
        this.check_karma();
      }
    } else {

    this.Check_all();
    this.check_karma();
    }
    //
    const inspectEvent = action.event;

    if (action.needs) {
      this.use_needed_item(action, idx);
    }
    if (!action.needs && action.event === 'take') {
      this.activate_help(action);
      this._characterService.updatePlayerBag(action.object);
      this.playersPoint.inspects.splice(idx, 1);
      this._characterService.global_update_message = `You took ${action.object.name}.`;
    }
    this.check_inspects_guard(this.playersPoint);
    this.currentEvent = this.firstworldevents[inspectEvent];
    /// in case of influence event which happens no matter what.
    if (this.currentEvent) {
            this.Check_all();

          if (this.currentEvent.influence_event) {
            const trigger =  Math.floor(Math.random() * this.Player.karma);
            console.log(trigger);
            if (trigger <  this.currentEvent.influence_event.impact_chance) {
              if (this.currentEvent.influence_event.impact[0] === 'negative') {
                console.log('negative');
                this.Player[this.currentEvent.influence_event.impact[1]] -= this.currentEvent.influence_event.impact[2];
                this._characterService.global_update_message = this.currentEvent.influence_event.description;
              } if  (this.currentEvent.influence_event.impact[0] === 'positive')  {
                this.Player[this.currentEvent.influence_event.impact[1]] += this.currentEvent.influence_event.impact[2];
                this._characterService.global_update_message = this.currentEvent.influence_event.description3;
              }
            } else {
              this._characterService.global_update_message = this.currentEvent.influence_event.description2;
              }
          }  else {
            console.log('no influence');
          }
        }
        this.check_karma();

  }



  inspectEvent(action, idx) {
    this._battleService.updateHealthColor();

    if (action.karma_impact) {
      this.karma_update(action);
    }
    this.check_inspects_guard(this.playersPoint);
    console.log('inspectEvent');
    if (action.event === 'take') {
      console.log('ah');
      this._characterService.updatePlayerBag(action.object);
      this.currentEvent.updateMessage = `'You found ${action.object.name}.  \n ${action.object.description} \n'`;
      this.currentEvent.inspects.splice(idx, 1);
      if (this.currentEvent.inspects < 1) {
        this.currentEvent.access_directions_state = true;
      }
    } else if (action.event === 'run') {
      console.log('run');
      const currentEnemy = this.currentEvent.enemy;
        Math.floor(Math.random() * this.Player.karma);
        const luck = Math.floor(Math.random() * this.Player.karma);
        if (luck >= currentEnemy.flee_chance) {
          console.log(luck);
          this.Check_all();
          this._characterService.global_update_message = `You fled ${currentEnemy.name}.  \nYour 'Karma' may have saved you.`;
          this.currentEvent = null;
        } else {
          action.event = 'run';
          const flee_token = true;
         const currentEnem = this.currentEvent.enemy;
         this.temp_strength = this._characterService.Player.strength;
         this.temp_karma = this._characterService.Player.karma;
         this.temp_speed = this._characterService.Player.speed;
          this._battleService.fightStart(currentEnem, action, flee_token);

        }
      // this.currentEvent = null;
      }
          if (action.event === 'fight') {
      console.log('fight');
       this.temp_strength = this._characterService.Player.strength;
      this.temp_karma = this._characterService.Player.karma;
      this.temp_speed = this._characterService.Player.speed;
      const currentEnemy = this.currentEvent.enemy;
      this.Check_all();
      const flee_token = false;
      this._battleService.fightStart(currentEnemy, action, flee_token);
        }  else {

          }
    this._characterService.retrievePlayer();
    this.check_karma();
  }

  aquire() {

  }
  fight(action) {
    let object = '';
    let gold = '';
    if (this._characterService.Player.health <= 0) {
      this._battleService.max_Taunt = 0;
      this._characterService.Player.health = 0;
      this._battleService.currentFight = false;
      const message = this.currentEvent.enemy.loss_message;
      this.currentEvent = events.enemy_end;       // this should end the game
      this._characterService.global_update_message = null;
      this.currentEvent.description = message;
      this._audioService.fight_music(false);
       }
      if (this._battleService.currentEnemy.health <= 0) { // base case
        console.log('win');
        this.currentEvent.description = null;
        if (this.currentEvent.description_replace) {
          this.currentEvent.description = this.currentEvent.description_replace;
        }
        this._audioService.fight_music(false);
        console.log(this.currentEvent.description_replace + 'UHSAHGSADHGJSADJHGADSGJHAGHJS');
        this._battleService.max_Taunt = 0;
        if (this.currentEvent.enemy_object) {
          this.Player.bag.push(this.currentEvent.enemy_object);
          object =  `You recieved '${this.currentEvent.enemy_object.name}'. `;
          console.log(object);
          console.log(this.currentEvent);
        }

      this.xp += this._battleService.currentEnemy.xp;
      const win = `You have defeated '${this._battleService.currentEnemy.name}. \n`;

      if (this._battleService.currentEnemy.gold > 0) {
        gold = `You aquired ${this._battleService.currentEnemy.gold} gold. \n`;
        console.log(gold);
        this._characterService.global_update_message = win.concat(gold);
        this.Player.gold += this._battleService.currentEnemy.gold;
      }

      this._battleService.currentFight = false;
      this.currentEvent.inspects.splice(0, 2);
      this.playersPoint.event = null;
      this.playersPoint.eventtriggerchance = 0;
      this.currentEvent.currentEnemy = null;
      this.currentEvent.access_directions_state = true;
      if (this.currentEvent.stall_state === true) {
        this.currentEvent.description = this.currentEvent.description_replace;

      } else {
        this.currentEvent = null;
      }  // this helps at chapter ends and keeps events going
       this._battleService.currentEnemy = null;
       this._characterService.Player.strength = this.temp_strength;
       this._characterService.Player.karma = this.temp_karma;
       this._characterService.Player.speed = this.temp_speed;
      if (this.xp > 70) {
        this.xp = 0;
        this._characterService.Player.lvl += 1;
        this._characterService.Player.health += 10;
        this._characterService.MaxHealth += 30;
        this._characterService.Player.speed += 10;
        this._characterService.Player.karma += 5;
         const str = ` \nStats before the battle's Taunts were restored and you have also increased to level
          '${this._characterService.Player.lvl}'. \n ${object} ${gold}`;
         this._characterService.global_update_message = win.concat( '\n' + str);
      } else {
        const restore = ` Stats from before the battle taunts have been restored. You are ${70 - this.xp}
        points away from the next level. ${object} ${gold}`;
        this._characterService.global_update_message = win.concat('\n' + restore);
      }


      this.post_battle_unequip();
      this.Check_all();
    }  else {
      console.log('still fighting');
     if (action === 'Strike') {
       this._battleService.enemyAttack(action);
       this.fight('dead');
      console.log('strike');
     } else if (action === 'Block') {
      console.log('block');
      this._battleService.enemyAttack(action);
      this.fight('dead');
     } else if (action === 'Taunt') {
      console.log('taunt');
      this._battleService.enemyAttack(action);
      this.fight('dead');
     } else if (typeof action === 'number' ) {
      console.log(action);
      this._battleService.use_item_mid_battle(action);
     }
    }
    this.check_karma();

    this._battleService.updateHealthColor();

  }

  updateCharacterStats() {

  }

  goBack() {
    this.Player.worldPoint.pop();
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
  }

  post_battle_unequip() {
    for (let i = 0; i < this._characterService.Player.bag.length; i++) {
      if (this._characterService.Player.bag[i].name === this._characterService.Player.weapon.name) {
        this._battleService.weaponequip(this._characterService.Player.bag[i], i, 'unequip');
        return;
      }
    }
  }
  getImageState(image) {
    return image;

}
}
