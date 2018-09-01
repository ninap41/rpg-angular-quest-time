import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from '../player-create';
import { Animations, gameStart } from '../animate';
import { HumanWorldStart, events } from '../world1';

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
  WorldName;
  gameStart;


  constructor(private _characterService: CharacterService) {
    this.Player = this._characterService.retrievePlayer(); }

  ngOnInit() {
    this.Player = this._characterService.retrievePlayer();
    // this.gameStart =  this._characterService.startGame;
  }
  GameStart() {
    this._characterService.createPlayer(this.Player);
    this.Player = this._characterService.retrievePlayer();
    this.gameStart = true;
    this._characterService.showNav = true;
    this.WorldName = HumanWorldStart.name.replace('CHARHOMETOWN', this.Player.hometown);

  }


  getRouterState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';

}

}
