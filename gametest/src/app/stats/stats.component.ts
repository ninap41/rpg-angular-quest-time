import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';
import { Animations, routerTransition2, routerTransition, fadeAnimation,  healthTransition} from '../animate';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  animations: [
    healthTransition
  ],
})
export class StatsComponent implements OnInit {
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
    this.Player.healthColor = 'green';

  }

  updateAvatar() {

  }

}
