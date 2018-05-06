import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../character.service';
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
// all of map


  constructor(
    private _characterService: CharacterService,
    private _router: Router) {
      this.Player = this._characterService.retrievePlayer();
     }

  ngOnInit() {

    this._characterService.gameStart = true;
    this.Player = this._characterService.retrievePlayer();
    this.playertest = JSON.parse(localStorage.getItem('Player'));

    this.firstworld = HumanWorldStart;
    console.log('PLAYER TEST: '  + this.playertest.name );

    if ( this.Player.worldPoint.length === 0) {
      this.Player.worldPoint.push(this.firstworld.home);
      this.playersPoint =  this.firstworld.home;
        this.check_name_and_home(this.playersPoint);

    } else {
      this.Player.worldPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
      this.playersPoint = this.Player.worldPoint;
      this.check_name_and_home(this.playersPoint);

    }

    // this._characterService.gameStart = true;
    // this.Player = this._characterService.retrievePlayer();
    // this.errors = this._characterService.error;
    // this.firstworld = HumanWorldStart;

    // if ( this.Player.worldPoint.length === 0 || !this.Player.worldPoint) {
    //   this.Player.worldPoint.push(this.firstworld.home);
    //   this.playersPoint =  this.firstworld.home;
    //   this.check_name_and_home(this.playersPoint);
    //   // console.log(this.playersPoint.description);

    // } else {
    //   this.Player.worldPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    //   this.playersPoint = this.Player.worldPoint;
    //   this.check_name_and_home(this.playersPoint);
    // }
    // this.playersPoint = this.firstworld.home;
    console.log( 'this.playersPoint: ' + this.playersPoint +
    'this.playersPoint: ' +  this.Player.worldPoint);
  }

  check_name_and_home(point) {
    if (point.description) {
      this.playersPoint.description = this.playersPoint.description.replace('CHARHOMETOWN', this.Player.hometown); // put in service
      this.playersPoint.description = this.playersPoint.description.replace('CHARNAME', this.Player.name);
      this.playersPoint.description = this.playersPoint.description.replace('CHARRACE', this.Player.race); // put in service
      }

  }

  traverse(direction) {
    this.currentEvent = null;
    this.Player.worldPoint.push(this.firstworld[direction.room]);
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    if (this.playersPoint.eventtriggerchance) {
      const trigger = Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        console.log('event begun');
      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.Player.worldPoint.push(this.firstworld[direction.room]);
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];      }
    } else {

    this.check_name_and_home(this.playersPoint);
    }
  }
  traverseFromEvent(direction) {
    this.currentEvent = null;
    this.Player.worldPoint.push(this.firstworld[direction.room]);
    this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
    if (this.playersPoint.eventtriggerchance) {
      const trigger = Math.floor(Math.random() * this.playersPoint.eventtriggerchance);
      this.playersPoint.eventtriggerchance = null;
      if (trigger === 1) {
        this.currentEvent = this.firstworldevents[this.playersPoint.event];
        console.log('event begun');
      } else {
        console.log ('event avoided');
        this.currentEvent = null;
        this.playersPoint = this.Player.worldPoint[this.Player.worldPoint.length - 1];
        this.check_name_and_home(this.playersPoint);

      }
    } else {
   
    this.check_name_and_home(this.playersPoint);
    }
  }
  inspectWorld(action, idx) {
    this.currentEvent = this.firstworldevents[action];
    console.log(this.currentEvent);
    // this.playersPoint.inspects[idx] = null;
    // console.log('eradicated: ' +  this.playersPoint.inspects[idx] );
  }
  inspectEvent(action, idx) {
    if (action.event === 'take') {
      this._characterService.updatePlayerBag(action.object);
      console.log('do not be empty: ' + this.currentEvent.inspects[idx]);
      this.currentEvent.updateMessage = `'You found ${action.object.name}. ${action.object.description}.
      Check Your Inventory'`;
      this.currentEvent.inspects.splice(idx, 1);
      if (this.currentEvent.inspects < 1) {
        console.log(this.currentEvent.access_directions_state);
        this.currentEvent.access_directions_state = true;

      }
    } else {
      this.currentEvent.updateMessage = `You did not take ${this.currentEvent.inspects[idx].object.name}.`;
    }
    // this.currentEvent.inspects[idx] = null;
  }
  aquire() {

  }
  updateCharacterStats() {

  }
  goBack() {
    this.Player.worldPoint.pop();

  }

}
