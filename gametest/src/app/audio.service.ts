import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'; // Client Module
import {Observable} from 'rxjs/Observable';
// import { BattleService } from './battle.service';
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
export class AudioService {

main_theme = '../../../assets/backingone.mp3';
fight_theme = '../../../assets/bensound-epic.mp3';

current_music = null;
sound_effect;
delayed_sound;
inventory_sound;
enemy_sound;
fight_theme_audio = new Audio();

  constructor(
    // private _battleService: BattleService,

  ) {
    this.inventory_sound = new Audio();
    this.enemy_sound = new Audio();


   }

   weaponEquip_sound(state) {
     if (state === 'equip') {
    // this.inventory_sound = new Audio();
    this.inventory_sound.src = '../../../assets/sounds/rpg/inventory/light_equip.wav';
    this.inventory_sound.load();
    this.inventory_sound.play();
     }  else {
      this.inventory_sound.src = '/assets/sounds/rpg/inventory/cloth-heavy.wav';
      this.load_n_play( this.inventory_sound, this.inventory_sound.src);
     }
    return;
   }


   addBag(soundtype) {
     console.log(soundtype);
    this.inventory_sound.src = `../../../assets/sounds/rpg/inventory/${soundtype}.wav`;
    this.inventory_sound.load();
    this.inventory_sound.play();
   }

   fight_sound(currentEnemy) {
     if (currentEnemy.race === 'Orc') {
      this.enemy_sound = new Audio();
      this.enemy_sound.src = `/assets/sounds/rpg/enemy/ogre${(Math.floor(Math.random() * 4) + 1)}.wav`;
     } else if (currentEnemy.race === 'Human') {
      this.enemy_sound = new Audio();
      this.enemy_sound.src = `/assets/sounds/rpg/enemy/human/human${(Math.floor(Math.random() * 3)) + 1}.mp3`;
     }
  this.load_n_play( this.enemy_sound, this.enemy_sound.src);
   }

   fight_music(fight_boolean) {
      if (fight_boolean === true) {
        this.current_music.animate({volume: 1}, 0, 'swing', function() {
          this.current_music[0].pause();
      });
         this.current_music.src = this.fight_theme;
         this.load_n_play(  this.current_music, this.current_music.src);
        } else {
          this.current_music.src = this.main_theme;
          this.load_n_play(  this.current_music, this.current_music.src);
       }
   }

   random_sound(path) {
     const rand_sound = new Audio();
     rand_sound.src = path;
     this.load_n_play(rand_sound, path);
   }


   load_n_play(sound, src) {
     sound.load();
     sound.play();

   }


}
