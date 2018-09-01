import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-full-stats',
  templateUrl: './full-stats.component.html',
  styleUrls: ['./full-stats.component.scss']
})
export class FullStatsComponent implements OnInit {
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
