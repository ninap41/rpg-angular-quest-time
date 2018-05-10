import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../character.service';
import { BattleService } from '../../battle.service';

import { RouterModule, Routes, Router } from '@angular/router';
import { HumanWorldStart, events } from '../../world1';
import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from '../../player-create';


@Component({
  selector: 'app-firstworld',
  templateUrl: './firstworld.component.html',
  styleUrls: ['./firstworld.component.css']
})
export class FirstworldComponent implements OnInit {
Player = new Player;

lastspot;
startingPoint; // initial
playersPoint; // current
eastRoom; // a room in map
westRoom; // a room in map
gameState;
firstworld;
firstworldevents = events;
playertest;
currentEvent;
errors;
worldpoint;
WorldName;
updateMessage;
weaponGuard;
xp = 0;
// all of map


  constructor(
    private _characterService: CharacterService,
    private _battleService: BattleService,
    private _router: Router) {
      this.Player = this._characterService.retrievePlayer();
     }

  ngOnInit() {
    this.weaponGuard = this._battleService.weaponGuard;
    this._characterService.gameStart = true;
    this.Player = this._characterService.retrievePlayer();
    this.playertest = JSON.parse(localStorage.getItem('Player'));
    this.firstworld = HumanWorldStart;
    this.WorldName = HumanWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);
    console.log('PLAYER TEST: '  + this.playertest.name );
    console.log('Length: '  + this.Player.worldPoint.length);
    console.log('content: '  + this.Player.worldPoint);
    if (this.Player.worldPoint.length === 0) {
      this.Player.worldPoint.push(this.firstworld.home);
      this.playersPoint = this.firstworld.home;
      this.Check_all();
    } else {
      this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
      this.Check_all();
    }
    console.log( 'this.playersPoint: ' + this.playersPoint +
    'this.playersPoint: ' +  this.Player.worldPoint);
    this.Check_all();
  }

  Check_all() {
    this.check_name_and_home(this.playersPoint);
    this.check_inspects_guard(this.playersPoint);
  }

  karma_update(point) {
    if (point.karma_impact[0] === 'negative') {
      this.Player.karma -= point.karma_impact[1];
    } else {
      this.Player.karma += point.karma_impact[1];
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
        for (const item of this.Player.bag) {
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

  check_name_and_home(point) {
    if (point.description) {
      this.playersPoint.description = this.playersPoint.description.replace('CHARHOMETOWN', this.Player.hometown); // put in service
      this.playersPoint.description = this.playersPoint.description.replace('CHARNAME', this.Player.name);
      this.playersPoint.description = this.playersPoint.description.replace('CHARRACE', this.Player.race); // put in service
      }
  }

  // check_name_and_home_enemy(currentEvent) {
  //   if (this.currentEvent.description) {
  //     this.currentEvent.description =  this.currentEvent.description.replace('CHARHOMETOWN', this.Player.hometown);
  //     this.currentEvent.description = this.currentEvent.description.replace('CHARNAME', this.Player.name);
  //     this.currentEvent.description = this.currentEvent.description.replace('CHARRACE', this.Player.race); // put in service
  //     this.currentEvent.enemy.opening_line = this.currentEvent.enemy.opening_line.replace('CHARRACE', this.Player.race);
  //     }
  // }
  traverse(direction) {
    if (direction.karma_impact) {
      this.karma_update(direction);
    }
    console.log('traverse()');
    this._characterService.global_update_message = null;
    this.currentEvent = null;
    this.Player.worldPoint.push(this.firstworld[direction.room]);
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    if (this.playersPoint.eventtriggerchance) {
      const trigger =  Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        console.log('event begun');
      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.Player.worldPoint.push(this.firstworld[direction.room]);
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        this.Check_all();
      }
    } else {
    this.Check_all();
    }
  }



  traverseFromEvent(direction) {
    if (direction.karma_impact) {
      this.karma_update(direction);
    }
    console.log('traverseFromEvent()');
    this.currentEvent = null;
    this._characterService.global_update_message = null;
    this.Player.worldPoint.push(this.firstworld[direction.room]);
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    if (this.playersPoint.eventtriggerchance) {
      const trigger =  Math.floor(Math.random() * this.Player.karma);
      if (trigger < this.playersPoint.eventtriggerchance) {
        console.log('trigger: ' + trigger);
        console.log('this.playersPoint.eventtriggerchance: ' + this.playersPoint.eventtriggerchance);
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        this.playersPoint.eventtriggerchance = null;

      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        this.check_name_and_home(this.playersPoint);
        this.check_inspects_guard(this.playersPoint);
      }
    } else {
    this.check_name_and_home(this.playersPoint);
    this.check_inspects_guard(this.playersPoint);
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
      }
    }
  }

  inspectWorld(action, idx) {
    if (action.karma_impact) {
      this.karma_update(action);
    }
    console.log('inspectWorld()');

    if (this.playersPoint.eventtriggerchance) {
      const trigger =  Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        console.log(this.currentEvent);
        console.log('event begun');
      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.Player.worldPoint.push(this.firstworld[action.room]);
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        this.Check_all();
      }
    } else {

    this.Check_all();
    }
    //
    const inspectEvent = action.event;

    if (action.needs) {
      this.use_needed_item(action, idx);
    }
    if (!action.needs && action.event === 'take') {
      this.Player.bag.push(action.object);
      this.playersPoint.inspects.splice(idx, 1);
      this._characterService.global_update_message = `You took ${action.object.name}.`;
    }
    this.check_inspects_guard(this.playersPoint);
    this.currentEvent = this.firstworldevents[inspectEvent];
    /// in case of influence event which happens no matter what.
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



    }
  }


  inspectEvent(action, idx) {
    if (action.karma_impact) {
      this.karma_update(action);
    }
    this.check_inspects_guard(this.playersPoint);
    console.log('inspectEvent');
    if (action.event === 'take') {
      console.log('ah');
      this._characterService.updatePlayerBag(action.object);
      this.currentEvent.updateMessage = `'You found ${action.object.name}. ${action.object.description}'`;
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
          this._characterService.global_update_message = `You fled ${currentEnemy.name}. Your 'Karma' may have saved you.`;
          this.currentEvent = null;
        } else {
          const flee_token = true;
          this._battleService.fightStart(currentEnemy, action, flee_token);
        }
      this.currentEvent = null;
      }
          if (action.event === 'fight') {
      console.log('fight');
      const currentEnemy = this.currentEvent.enemy;
      const flee_token = false;
      this._battleService.fightStart(currentEnemy, action, flee_token);
        }  else {

          }
    this._characterService.retrievePlayer();
  }

  aquire() {

  }
  fight() {
   if (this.Player.health <= 0) {
    console.log('You should be dead now');
     }
    if (this._battleService.currentEnemy.health > 0) { // base case
      console.log('win');
      if ( this.currentEvent.description2) {
        this.currentEvent.description = this.currentEvent.description2;
      }
      this.xp += this._battleService.currentEnemy.xp;
      const win = `'You have defeated '${this._battleService.currentEnemy.name}'`;
      if (this.xp > 70) {
        this.xp = 0;
        this.Player.lvl += 1;
        this.Player.health += 10;
        this._characterService.levelUP(); // eventually as I make harder enemies.
        const xp = `You have also increased a level`;
        this._characterService.global_update_message = win.concat(xp);
      }
      if (this._battleService.currentEnemy.gold !== 0) {
        const gold = ` and aquired ${this._battleService.currentEnemy.gold} gold.`;
        this._characterService.global_update_message = win.concat(gold);
        this.Player.gold += this._battleService.currentEnemy.gold;
      }
      this._battleService.currentFight = false;
      this.currentEvent.inspects.splice(0, 2);
      // this.playersPoint.eventtriggerchance = 0;
      this.currentEvent.currentEnemy = null;
      this.currentEvent.access_directions_state = true;
      this.currentEvent = null;
      this._battleService.currentEnemy = null;
      this.Check_all();
    }  else {
      console.log('still fighting');
    }
  }

  updateCharacterStats() {

  }
  goBack() {
    this.Player.worldPoint.pop();
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
  }
}
