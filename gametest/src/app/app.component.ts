import { Component, OnInit} from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { CharacterService } from './character.service';
import { ActivatedRoute } from '@angular/router';
import { Wizard, Player, Ninja, Elf, Dwarf, Human, Orc } from './player-create';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';
import { AudioService } from './audio.service';
import { trigger, animate, style, group, query, transition, state, stagger, keyframes } from '@angular/animations';
import { Animations, routerTransition2, routerTransition, fadeAnimation} from './animate';

// import * as _ from 'lodash';

// !_.find(data, {name: 'helpbook'})
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import { animate } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.popoverTrigger,
    routerTransition2,
    routerTransition,
    fadeAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Quest Time';
  state;
  Player;
  error;
  gameState;
  GameOn;
  message;
  audio;

  constructor (
    private _router: Router,
    private _route: ActivatedRoute,
    private _characterService: CharacterService,
    private _audioService: AudioService,
    private _http: Http
  ) {

  }

  ngOnInit() {
    this._audioService.current_music = new Audio();
    this._audioService.current_music.load();
    this._audioService.current_music.src = '../../../assets/backingone.mp3';
    // this._audioService.current_music.play();
    this.Player = this._characterService.retrievePlayer();
    this.error = this._characterService.error;

    // this.gameState = this._characterService.startGame();
    console.log(this.gameState);
    console.log(this.Player);

  }

  startMusic() {
    this._audioService.current_music.play();
  }
  stopMusic() {
    this._audioService.current_music.pause();
  }
  newGame() {
    this._router.navigate(['/**']).then(() => {
      this._characterService.Player = new Human;
    });

  }

  getRouterState(outlet) {
      return outlet.isActivated ? outlet.activatedRoute : '';

  }

}
