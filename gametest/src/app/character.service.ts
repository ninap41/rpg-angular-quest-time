import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'; // Client Module
import {Observable} from 'rxjs/Observable';
import { AudioService } from './audio.service';

import 'rxjs/add/operator/map';    // RXJS operator Reactive. Same as Observable
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from './player-create';
import {  WorldPlayer, HumanWorldStart } from './world/world1';
import { weapons, items } from './world/item-create';
import { npcs } from './world/npc-create';


@Injectable()

export class CharacterService {
  WeaponList: any[] = [];
 gameStart = false;
 showNav = false;
 Player = new Player;
 playerfordeets;
 bag;
 error;
 serviceplayersPoint;
 MaxHealth;
 help = false;

global_update_message;
currentEvent = false;

  constructor(
    private _audioService: AudioService,
    private _router: Router,
    protected http: Http
  ) { }

  startGame() {
    this.gameStart = true;
    console.log(this.Player);
    return this.gameStart;
  }




  retrievePlayer() {
    localStorage.setItem('Player', JSON.stringify(this.Player));
    return this.Player;
  }
  isPlayer() {
    if (this.Player.name === '') {
      this.gameStart = false;
      this._router.navigate(['']);
    } else {
      this.gameStart = true;
    console.log(this.Player);
      return this.Player;
    }
  }

  updatePlayerBag(item) {
    console.log(item);
    if (item.id) {
      item.id = Math.floor(Math.random() * 10000000000);
    }
    this.Player.bag.push(item);
    this._audioService.addBag(item.soundtype);

    console.log('new Bag:' +  this.Player.bag);
    console.log('new item:' +  item);

    return this.Player;

  }



  // retrieveWeapons():  Array<string> {
  //   return this.WeaponList;
  // }
  // retrieveBag():  Array<string> {
  //   return this.bag;
  // }


  createPlayer(player) {
    if (player.race === 'Human' ) {
      this.Player = new Human;
   }
    if (player.race === 'Elf' ) {
      this.Player = new Elf;
    }
    if (player.race === 'Orc' ) {
      this.Player = new Orc;
    }
    if (player.race === 'Dwarf') {
      this.Player = new Dwarf;
    }
    if (player.race === 'Wizard') {
      this.Player = new Wizard;
      }
     this.MaxHealth = this.Player.health;
      this.Player.bag = weapons.basic_weapons.filter(function( obj ) {
          return obj.name === player.weapon;
      });
      if (this.Player.bag.length > 0) {
          if (this.Player.bag[0].karma_effect) {
            if (this.Player.bag[0].karma_effect.type === 'negative') {
              this.Player.karma -= this.Player.bag[0].karma_effect.effect;
            } else {
              this.Player.karma += this.Player.bag[0].karma_effect.effect;
            }
          }
        } else {
        this.Player.bag.push(weapons.basic_weapons[7]);
      }


      console.log(this.Player.bag);
      this.Player.name = player.name;
      console.log(this.Player);
      this.gameStart =  true;
      return this.Player;
  }

  findweapon(weaponname, weaponClass) { // finds weapon based on class
    const weapon = weapons[weaponClass].filter(function( obj ) {
      console.log(obj);
        return obj.name === weaponname.weapon;
    });
  }

  newgame() {
    this.Player = null;
    this.gameStart = false;
    this.showNav = false;
    return this._router.navigate(['']);
  }
  public handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}


export { Player};
