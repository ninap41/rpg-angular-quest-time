import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CharacterService } from "./character.service";
import { ActivatedRoute } from "@angular/router";
import { Human } from "./player-create";

import { AudioService } from "./audio.service";
import {
  Animations,
  routerTransition2,
  routerTransition,
  fadeAnimation,
} from "./animate";

// import * as _ from 'lodash';

// !_.find(data, {name: 'helpbook'})
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import { animate } from '@angular/core/src/animation/dsl';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    Animations.popoverTrigger,
    routerTransition2,
    routerTransition,
    fadeAnimation,
  ],
})
export class AppComponent implements OnInit {
  title = "Quest Time";
  state;
  Player;
  error;
  gameState;
  GameOn;
  message;
  audio;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    public _characterService: CharacterService,
    public _audioService: AudioService
  ) {}

  ngOnInit() {
    this._audioService.initialMusic();
    this.Player = this._characterService.retrievePlayer();
    this.error = this._characterService.error;
    // this.gameState = this._characterService.startGame();
    console.log(this.gameState);
    console.log(this.Player);
    this.startMusic();
  }

  goHomeAndReload() {
    this._router.navigate(["/"]).then(() => {
      console.log("new ");
      window.location.reload();
    });
  }
  startMusic() {
    this._audioService.current_music.play();
  }
  stopMusic() {
    this._audioService.current_music.pause();
  }
  newGame() {
    this._router.navigate(["/**"]).then(() => {
      this._characterService.Player = new Human();
    });
  }

  getRouterState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : "";
  }
}
