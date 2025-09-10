import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../character.service";

import { Animations, gameStart } from "../animate";
import { HumanWorldStart } from "../world/world1";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.scss"],
  animations: [Animations.popoverTrigger, gameStart],
})
export class HomepageComponent implements OnInit {
  Player;
  WorldName;
  gameStart;

  constructor(private _characterService: CharacterService) {
    this.Player = this._characterService.retrievePlayer();
  }

  ngOnInit() {
    this.Player = this._characterService.retrievePlayer();
    // this.gameStart =  this._characterService.startGame;
  }
  GameStart() {
    this._characterService.createPlayer(this.Player);
    this.Player = this._characterService.retrievePlayer();

    this.gameStart = true;
    this._characterService.showNav = true;
    this.WorldName = HumanWorldStart.name.replace(
      "CHARHOMETOWN",
      this.Player.hometown
    );
  }

  raceChange(event) {
    const value = (event.target as HTMLInputElement).value;
    // if(value === "Dwarf")    this.Player.bag.push('')
  }
  getRouterState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : "";
  }
}
