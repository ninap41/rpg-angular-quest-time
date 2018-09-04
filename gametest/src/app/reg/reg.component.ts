import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';
import { AudioService } from '../audio.service';

import { RouterModule, Routes, Router } from '@angular/router';
import { HumanWorldStart, events } from '../world/world1';
import { SecondWorldStart } from '../world/world2';

import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from '../player-create';

@Component({
  selector: 'app-log-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.scss']
})
export class RegComponent implements OnInit {
Player;
WorldName;
error;
user = {
  email: '',
  password: '',
};
  constructor(
    private _characterService: CharacterService,
    private _battleService: BattleService,
    private _audioService: AudioService,

    private _router: Router) {
      if (this._characterService.Player) {
        this.Player = this._characterService.retrievePlayer();
        console.log(this.Player);
      }
      this.Player = this._characterService.retrievePlayer();
      // this.WorldName = HumanWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);
     }

  ngOnInit() {

  }

}
