import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http'; // Client Module
import {Observable} from 'rxjs/Observable';
import { CharacterService } from './character.service';

import { AudioService } from './audio.service';

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
  showUsables = false;
  max_Taunt = 0;
  BattleItem;
  weapon_equip;
  char_min_speed;
  char_min_strength;
  enemy_min_speed;
  enemy_min_strength;


  constructor(
    private _router: Router,
    protected http: Http,
    private _characterService: CharacterService,
    private _audioService: AudioService,

  ) {}

  weaponequip(weapon, idx, value) {
   {
      this.Player = this._characterService.retrievePlayer();
      if (this.Player.weapon === null) {
        this.Player.weapon = weapon;
        this.Player.bag[idx].equipped = true;
        console.log('eh weapon should equip');
        this._audioService.weaponEquip_sound(value);
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
        this._audioService.weaponEquip_sound(value);
        this.weaponGuard = true;
        console.log('should unequip');
      }
    }
    // this._audioService.weaponEquip_sound(value);
  }

  fightStart(currentEnemy, action, flee_token) {
    this.currentEnemy = currentEnemy;
    this._audioService.fight_sound(currentEnemy);

    console.log(action);

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
      ${this.currentEnemy.name} has begun. Your weapon,
     '${this.Player.weapon.name}' is held firm in your hand, good to go.`;
     console.log(this.currentEnemy);
     console.log('fight start');
    }
  }

  enemyAttack(charAction) {
    const char_attack = this._characterService.Player.strength + this._characterService.Player.weapon.damage;
    let enemy_attack = this.currentEnemy.damage + this.currentEnemy.weapon.damage;
      const enemy_actions = [ 'Blocked', 'Retaliated', 'Attacked'];
      const enemy_action = enemy_actions[Math.floor(Math.random() * enemy_actions.length)];
      if (charAction) {
        if (charAction === 'Strike') {
          console.log(`Attack point(s) : ${char_attack}` );
        console.log('players health: ' + this._characterService.Player.health);
              if (enemy_action === 'Blocked') {
                const avoid_block_success_min = Math.floor(Math.random() * this.currentEnemy.speed);
                const speed_impact = Math.floor(Math.random() * this._characterService.Player.speed);
                if (speed_impact >= avoid_block_success_min) {
                  this.currentEnemy.health -= char_attack;
                  this.battle_update_message = `'${this.currentEnemy.name}'  '${enemy_action}', but failed to avoid the attack.
                  ${char_attack} point(s)  damage to ${this.currentEnemy.name}. `;
                } else {
                  console.log(enemy_action);
                  this.battle_update_message = `'${this.currentEnemy.name}'  '${enemy_action}', avoiding
                  ${char_attack} point(s)  damage from ${this._characterService.Player.name}. `;
                }

              }
              if (enemy_action === 'Retaliated') {
                this._audioService.fight_sound(this.currentEnemy);
                console.log(enemy_action);
                enemy_attack = enemy_attack / 2 ;
                this._characterService.Player.health -= enemy_attack;
                this.currentEnemy.health -= char_attack;
                this.battle_update_message = ` ${this.currentEnemy.name} took ${char_attack}
                points damage, but retaliated against ${this._characterService.Player.name}'s attack.
                They "${enemy_action}" back, inflicting ${ enemy_attack} point(s)  damage on ${this._characterService.Player.name}`;
              }
              if (enemy_action === 'Attacked') {
                console.log(enemy_action);
                this.battle_update_message = ` ${this._characterService.Player.name} attacked
                ${this.currentEnemy.name}, who took ${char_attack} point(s)  damage.
                He "${enemy_action}" and you took '${this.currentEnemy.damage}' point(s)  damage!.`;
                this.currentEnemy.health -= char_attack ;
                this._characterService.Player.health -= enemy_attack;

              }
      }
      if (charAction === 'Block') {
      console.log('players health: ' + this._characterService.Player.health);
            if (enemy_action === 'Blocked') {
              console.log(enemy_action);
              this.battle_update_message = ` ${this.currentEnemy.name} and you both asserted a defensive stance.`;
            }
            if (enemy_action === 'Attacked') {
              const avoid_block_success_min = Math.floor(Math.random() * this.currentEnemy.speed);
              const speed_impact = Math.floor(Math.random() * this._characterService.Player.speed);
              if (speed_impact >= avoid_block_success_min) {
                this.currentEnemy.health -= char_attack;
                this.battle_update_message = `'${this.currentEnemy.name}'  '${enemy_action}', but failed to avoid the attack.
                ${char_attack} point(s)  damage to ${this.currentEnemy.name}. `;
              } else {
                console.log(enemy_action);
                this.battle_update_message = `'${this.currentEnemy.name}'  '${enemy_action}', avoiding
                ${char_attack} point(s)  damage from ${this._characterService.Player.name}. `;
              }
              console.log(enemy_action);
              this.battle_update_message = ` ${this.currentEnemy.name}  "${enemy_action} ", but you blocked their Strike.`;
            }
            if (enemy_action === 'Retaliated') {
              console.log(enemy_action);
              this.battle_update_message = `${this.currentEnemy.name} attempted a retaliation, but you both asserted a defensive stance.`;
            }
      }

      if (charAction === 'Taunt') {
        let char_taunt = this._characterService.Player.karma + this._characterService.Player.strength;
        // taunts are reps and strength, changed to karmaand strength;
        char_taunt = Math.floor(Math.random() * char_taunt);
        let enemy_taunt = this.currentEnemy.damage + this.currentEnemy.flee_chance;
        enemy_taunt = Math.floor(Math.random() * enemy_taunt);
        let effect = 0;
        this.max_Taunt += 1;
        if (char_taunt >= enemy_taunt) {
          effect =  char_taunt;
          this._characterService.Player.karma += effect / 2 ;
          this._characterService.Player.speed += effect / 2;
          this._characterService.Player.strength += effect / 2 ;
          this.battle_update_message = `${this._characterService.Player.name} taunted ${this.currentEnemy.name} successfully.
          Their Karma, Strength, Speed increased by ${effect / 2} point(s).`;
        }  else {
          effect = enemy_taunt;
          this._characterService.Player.karma -= effect / 2;
          this._characterService.Player.speed -= effect / 2 ;
          this._characterService.Player.strength -= effect / 2 ;
          this.battle_update_message = `${this._characterService.Player.name} taunted ${this.currentEnemy.name} unsuccessfully.
          Their Karma, Strength and Speed decreased by ${effect / 2} point(s).`;
        }

      }
    }
  }


  use_item_mid_battle(idx) {
    const enemy_actions = [  'Taunted', 'Taunted', 'Attacked'];
    const enemy_attack = this.currentEnemy.damage + this.currentEnemy.weapon.damage;
      const enemy_action = enemy_actions[Math.floor(Math.random() * enemy_actions.length)];
    const item = this._characterService.Player.bag[idx];
    let str;

    if (item.influence_health) {
       if (this._characterService.Player.health + item.influence_health[1] >= this._characterService.MaxHealth) {
        str += `Your health is already Max. No increase in health.`;
       } else {
        this._characterService.Player.health += item.influence_health[1];
        str = `You consumed '${item.name}', restoring ${item.influence_health[1]} point(s)
        of health!`;
       }
    }
    if (item.influence_karma) {
      if (item.influence_karma[0] === 'positive') {
        this._characterService.Player.karma += item.influence_karma[1];
        str += `You consumed '${item.name}', gaining ${item.influence_karma[1]} point(s)
        of karma! `;

      } else {
        this._characterService.Player.karma -= item.influence_karma[1];
        str = `You consumed '${item.name}', losing ${item.influence_karma[1]} point(s)
        of karma! `;
      }
    }
    if (enemy_action === 'Taunted') {
      this._characterService.Player.speed -= this.currentEnemy.speed / 2;
      this._characterService.Player.strength -= this.currentEnemy.speed  / 2;
      this._characterService.Player.karma -= this.currentEnemy.speed  / 2;
      this.battle_update_message = str.concat(`While using
      '${this.currentEnemy.name}' Taunted you! You lost ${this.currentEnemy.speed / 2} point(s)
      of your speed, strength, and karma. `);
    }
    if (enemy_action === 'Attacked') {
      this._characterService.Player.health -= enemy_attack;
      if (this._characterService.Player.health <= 0) {
        return;
      }
      this.battle_update_message = str.concat('<br>' + `While using '${item.name}', '${this.currentEnemy.name}' attacked you! <br> you took
      ${enemy_attack} point(s) damage!`);
    }
    this.use_battle_item(idx, item);
    console.log(item.name);
  }


  use_battle_item(idx, item) {
    if (item.quantity > 0) {
      this._characterService.Player[idx].quantity -= 1;

    } else {
      this._characterService.Player.bag.splice(idx, 1);
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
    }
}

}
