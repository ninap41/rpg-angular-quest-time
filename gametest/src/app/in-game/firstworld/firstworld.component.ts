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
// all of map


  constructor(
    private _characterService: CharacterService,
    private _battleService: BattleService,
    private _router: Router) {
      this.Player = this._characterService.retrievePlayer();
     }

  ngOnInit() {

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

  check_inspects_guard(point) {
    if (point.inspects) {
      for (const inspect of point.inspects) {
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
    this.currentEvent = null;
    this.Player.worldPoint.push(this.firstworld[direction.room]);
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    if (this.playersPoint.eventtriggerchance) {
      const trigger =  Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      this.playersPoint.eventtriggerchance = null;
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];

        console.log('event begun');
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
    console.log(' use_needed_item');
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
    this.check_inspects_guard(this.playersPoint);
    this.currentEvent = this.firstworldevents[inspectEvent];
    console.log(this.currentEvent);
  }


  inspectEvent(action, idx) {
    if (action.event === 'take') {
      this._characterService.updatePlayerBag(action.object);
      this.currentEvent.updateMessage = `'You found ${action.object.name}. ${action.object.description}.
      Check Your Inventory'`;
      this.currentEvent.inspects.splice(idx, 1);
      if (this.currentEvent.inspects < 1) {
        this.currentEvent.access_directions_state = true;
      }
    } else if (action.event === 'run') {
      console.log('run');

      const currentEnemy = this.currentEvent.enemy;
      this._battleService.fleeFight(currentEnemy );

    } else if (action.event === 'fight') {
      console.log('fight');
      const currentEnemy = this.currentEvent.enemy;
      this._battleService.fightStart(currentEnemy);
    }  else {
      this.currentEvent.updateMessage = `You did not take ${this.currentEvent.inspects[idx].object.name}.`;
    }
  }

  aquire() {

  }

  updateCharacterStats() {

  }
  goBack() {
    this.Player.worldPoint.pop();
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];

  }

}
