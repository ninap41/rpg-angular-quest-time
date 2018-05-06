import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from '../player-create';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
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


}
