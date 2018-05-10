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
battle_update_message = '';
 currentEnemy;
 weaponGuard = true;
 success_fail_message;


  constructor(
    private _router: Router,
    protected http: Http,
    private _characterService: CharacterService,
  ) {

  }




  weaponequip(weapon, idx, value) {
   {
      this.Player = this._characterService.retrievePlayer();
      if (this.Player.weapon === null) {
        this.Player.weapon = weapon;
        this.Player.bag[idx].equipped = true;
        console.log('eh weapon should equip');
        this.weaponGuard = false;
      } else if (value === 'equip') {
        this.weaponGuard = false;
        if (weapon.id === this.Player.weapon.id) {
          console.log('should do nothing');
        } else {
          for (let item of this.Player.bag) {
            if (item.id === this.Player.weapon.id ) {
              item.equipped = true;
              item = this.Player.weapon;
              this.Player.weapon = item;
            }  if (item.id !== this.Player.weapon.id ) {
              this.Player.bag[idx].equip = true;
              for (const checkitemagain of this.Player.bag) {
                if (checkitemagain.id === this.Player.weapon.id) {
                  console.log('check item true');
                  checkitemagain.equip = true;
                  this.Player.bag[idx].equip = true;
                  item.equip = true;
                }
              }
            } else {
              item.equip = true;
              this.Player.weapon.equipped = false;
              item = this.Player.weapon;
              this.Player.weapon = item;
            }
          }
          this.Player.weapon.equip = false;
          this.Player.weapon = weapon;
          weapon.equip = true;
          this.weaponGuard = false;
        }
        this.weaponGuard = false;
      } else if (value === 'unequip' ) {
        this.weaponGuard = true;
        this.Player.weapon.equipped = false;
        weapon.equipped = true;
        for (let item of this.Player.bag) {
          if (item.id === weapon.id) {
            item = weapon;
            item.equipped = false;
            this.Player.weapon = null;
            this.weaponGuard = true;
          }
        }
        this.weaponGuard = true;
        console.log('should unequip');
      }
    }

  }





  fightStart(currentEnemy, action, flee_token) {
    console.log(action);
    this.currentEnemy = currentEnemy;
    console.log('enemy!' + currentEnemy);
    this.currentFight  = true;
    if (this._characterService.Player.weapon === null) {
      this.currentFight  = true;
      this.weaponGuard = false;
    } if (this._characterService.Player.weapon)  {
      this.currentFight  = true;
      this.weaponGuard = true;
    }
    if (flee_token === true) {
      this.battle_update_message = `Uh Oh, you must fight ${currentEnemy.name}. You unsuccesfully fled the battle.`;
    } else {
      this.battle_update_message = `Fight with
      has ${this.currentEnemy.name} begun. Your weapon,
      has ${this.Player.weapon.name} has automatically been equipped.`;
     console.log(this.currentEnemy);
     console.log('fight start');
    }

  }


  fightEnd(currentEnemy) {
    this.Player.lvl += 1;
    this.Player.gold += this.currentEnemy.gold;
    this.currentEnemy = null;
    return false;
  }



  FIGHT() {
    if (this.currentEnemy.health <= 0) { // base CASE baby
            this.fightEnd(this.currentEnemy);
    //         this.battle_update_message = `Fight with has ${this.currentEnemy.name} successful.  ${this.Player.weapon.description}
    //  Your weapon ${this.Player.weapon.name} should aid you in battle`;
  }

  }

}
