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
import { CharacterService } from './character.service';

@Injectable()
export class AudioService {

// main_theme = '../../../assets/sounds/backingone.mp3';
// fight_theme = '../../../assets/bensound-epic.mp3';
main_theme = '../../../assets/sounds/rpg_main_theme.mp3';
fight_theme = '../../../assets/sounds/battle_music.mp3';

current_music = new Audio();
sound_effect;
delayed_sound;
inventory_sound;
enemy_sound;

fight_theme_audio = new Audio();

  constructor(
  ) {
    this.inventory_sound = new Audio();
    this.enemy_sound = new Audio();
    if(this.current_music.src === null) {
      this.current_music.src = this.main_theme;
      this.current_music.load()
      this.current_music.play()
      this.current_music.loop;
    }
   }

   initialMusic(){ // just in case of constructor not working.
    this.current_music = new Audio();
    this.current_music.load();
    this.current_music.src = '../../../assets/sounds/rpg_main_theme.mp3';
    this.current_music.play();
    this.current_music.loop;
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
      //   this.current_music.animate({volume: 1}, 0, 'swing', function() {
      //     this.current_music[0].pause();
      // });
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

   loadRoomMusic(src) {
     var tempAudio = new Audio();
     tempAudio.src = src;
     if(this.current_music.src !== tempAudio.src) {
       this.current_music.src = src;
       this.current_music.load()
       this.current_music.play();
       this.current_music.loop = true;
     }
   }
   load_n_play(sound, src) {
     sound.load();
     sound.play();
   }


}
