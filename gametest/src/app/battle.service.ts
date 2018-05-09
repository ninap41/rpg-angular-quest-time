import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'; // Client Module
import {Observable} from 'rxjs/Observable';
import { CharacterService } from './character.service';


import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from './player-create';
import {  WorldPlayer, HumanWorldStart } from './world1';
import { weapons, items } from './item-create';

@Injectable()
export class BattleService {
  WeaponList: any[] = [];
 gameStart = false;
 showNav = false;
 Player = new Player;
 playerfordeets;
 bag;
 error;
 serviceplayersPoint;
 MaxHealth;
 currentFight = false;

 currentEnemy;


  constructor(
    private _router: Router,
    protected http: Http,
    private _characterService: CharacterService,
  ) {

  }




  weaponequip(weapon, idx) {
    this.Player = this._characterService.retrievePlayer();
    if (this.Player.weapon === null) {
      this.Player.weapon = weapon;
      this.Player.bag.splice(idx, 1);
      console.log( this.Player.bag[idx]);
      console.log('eh weapon should equip');
    } else {
      console.log('should unequip');
      this.Player.bag.push(weapon);
      console.log( this.Player.bag[idx]);
      this.Player.weapon = null;

    }
  }


  fightStart(currentEnemy) {
    this.currentEnemy = currentEnemy;
    this.currentFight  = true;
    console.log(this.currentEnemy);
    console.log('fight start');
  }
  fleeFight(currentEnemy) {
    this.currentEnemy = currentEnemy;
    console.log(this.currentEnemy);
    console.log('attempted flee');
  }

  fightEnd(currentEnemy) {
    this.currentEnemy = null;

    return false;
  }

}
