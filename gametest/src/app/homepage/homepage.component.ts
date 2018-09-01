import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from '../player-create';
import { Animations, gameStart } from '../animate';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    Animations.popoverTrigger,
    gameStart
  ]
})
export class HomepageComponent implements OnInit {
  Player;
  gameStart;


  constructor(private _characterService: CharacterService) {
    this.Player = this._characterService.retrievePlayer(); }

  ngOnInit() {
    // this.Player = this._characterService.retrievePlayer();
    // this.gameStart =  this._characterService.startGame;
  }
  GameStart() {
    this._characterService.createPlayer(this.Player);
    this.Player = this._characterService.retrievePlayer();
    this.gameStart = true;
    this._characterService.showNav = true;
  }


  getRouterState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';

}

}
