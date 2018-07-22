import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../character.service';
import { RouterModule, Routes, Router } from '@angular/router';
@Component({
  selector: 'app-secondworld',
  templateUrl: './secondworld.component.html',
  styleUrls: ['./secondworld.component.css']
})
export class SecondworldComponent implements OnInit {
Player;
  constructor(
    public _characterService: CharacterService,
    public _router: Router
  ) {

    this.Player = this._characterService.retrievePlayer();
  }

  ngOnInit() {
    this.Player = this._characterService.retrievePlayer();
  }

}
