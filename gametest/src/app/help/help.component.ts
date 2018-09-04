import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  Player;
  gameStart = true;
    constructor(
      private _characterService: CharacterService,
      private _battleService: BattleService,
    ) {

    }
    ngOnInit() {
      this.Player = this._characterService.Player;
      this._characterService.gameStart = true;

    }

}
