import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
Player;
gameStart = true;
  constructor(
    private _characterService: CharacterService,
  ) {

  }

  ngOnInit() {
    this.Player = this._characterService.Player;
    this._characterService.gameStart = true;

  }

}
