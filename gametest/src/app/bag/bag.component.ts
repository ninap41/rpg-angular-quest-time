import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';
import { AudioService } from '../audio.service';


@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
Player;
title = 'Bag';
fightBool = 'You cannot access this bag while a fight is in progress. Refer to battle bag';

  constructor(
   public _characterService: CharacterService,
   public _battleService: BattleService,
   public _audioService: AudioService,
  ) { }

  ngOnInit() {
    this.Player = this._characterService.Player;
    this._characterService.gameStart = true;
}

use_item(item, idx) {

    let str = '';
    if (item.use_sound) {
      this._audioService.random_sound(item.use_sound);
    }
    if (item.influence_health) {
      if (item.influence_health[0] === 'positive') {
       if (this._characterService.Player.health + item.influence_health[1] >= this._characterService.MaxHealth) {
         const health_difference = this._characterService.MaxHealth - this._characterService.Player.health;
        this._characterService.Player.health += health_difference;
        str = `Your health increased by ${health_difference} point(s).
        Your health is Maxed at ${this._characterService.MaxHealth}. Consumables will have no effect.`;
       } else {
        this._characterService.Player.health += item.influence_health[1];
        str += `You consumed '${item.name}', restoring ${item.influence_health[1]} point(s)
        of health!`;
       }
      } else {
        this._characterService.Player.health -= item.influence_health[1];
        str += `You consumed '${item.name}', losing ${item.influence_health[1]} point(s)
        of health! `;
      }
    }
    if (item.influence_karma) {
      if (item.influence_karma[0] === 'positive') {
        this._characterService.Player.karma += item.influence_karma[1];
        str += `You consumed '${item.name}', gaining ${item.influence_karma[1]} point(s)
        of karma! `;

      } else {
        this._characterService.Player.karma -= item.influence_karma[1];
        str += `You consumed '${item.name}', losing ${item.influence_karma[1]} point(s)
        of karma! `;
      }
    }
   if (item.quantity > 0) {
      this._characterService.Player[idx].quantity -= 1;

    } else {
      this._characterService.Player.bag.splice(idx, 1);
    }
    this._characterService.global_update_message = str;


}

}
