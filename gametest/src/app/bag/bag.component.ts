import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { BattleService } from '../battle.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
Player;
title = 'Bag';
  constructor(
    private _characterService: CharacterService,
    private _battleService: BattleService,
    private _itemService: ItemService
  ) { }

  ngOnInit() {
    this.Player = this._characterService.Player;
  this._characterService.gameStart = true;
}


}
