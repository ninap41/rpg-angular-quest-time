import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  Player;
  gameStart = true;
    constructor(
      private _characterService: CharacterService,
      private _battleService: BattleService,
      private _itemService: ItemService
    ) {

    }
    ngOnInit() {
      this.Player = this._characterService.Player;
      this._characterService.gameStart = true;

    }

}
