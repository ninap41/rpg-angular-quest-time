import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
Player;
gameStart = true;
  constructor(
   public _characterService: CharacterService,
   public _battleService: BattleService,
  ) {

  }

  ngOnInit() {
    this.Player = this._characterService.Player;
    this._characterService.gameStart = true;
    this.Player.healthColor = this._characterService.Player.healthColor;
    console.log( this._characterService.Player.healthColor  + ' + in stats');

  }

}
