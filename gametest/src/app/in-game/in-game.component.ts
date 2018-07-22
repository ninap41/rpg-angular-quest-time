import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { RouterModule, Routes, Router } from '@angular/router';

import { Player } from '../player-create';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css']
})
export class InGameComponent implements OnInit {
Player;
gameStart = true;
message;
    constructor(
      public _characterService: CharacterService,
      public _router: Router) {
      this.Player = this._characterService.retrievePlayer();
}

    ngOnInit() {
      this._characterService.gameStart = true;

      this.Player = this._characterService.retrievePlayer();
    }
}
