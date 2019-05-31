import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { Animations, routerTransition2, routerTransition} from '../animate';
import { Player } from '../player-create';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.scss'],
  animations: [
    Animations.popoverTrigger,
    routerTransition2,
    routerTransition
  ]
})
export class InGameComponent implements OnInit {
Player;
gameStart = true;
message;
    constructor(
     public _characterService: CharacterService,
      private _router: Router) {
      this.Player = this._characterService.retrievePlayer();
}

    ngOnInit() {
      this._characterService.gameStart = true;
      this.Player = this._characterService.retrievePlayer();
    }
    getRouterState(outlet) {
      return outlet.activatedRouteData.state;
    }


}
