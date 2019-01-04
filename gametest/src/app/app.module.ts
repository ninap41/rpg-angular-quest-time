import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { trigger, animate, style, group, query, transition, state, stagger, keyframes } from '@angular/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Routing
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Materials



import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { CharacterService } from './character.service';
import { BattleService } from './battle.service';
import { AudioService } from './audio.service';

import { InGameComponent } from './in-game/in-game.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StatsComponent } from './stats/stats.component';
import { BagComponent } from './bag/bag.component';
import { FirstworldComponent } from './in-game/firstworld/firstworld.component';
import { BattleComponent } from './battle/battle.component';
import { ShopComponent } from './shop/shop.component';
import { FullBagComponent } from './full-bag/full-bag.component';
import { HelpComponent } from './help/help.component';
import { FullStatsComponent } from './full-stats/full-stats.component';
import { RegComponent } from './reg/reg.component';
import { IntropageComponent } from './intropage/intropage.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    InGameComponent,
    HomepageComponent,
    StatsComponent,
    BagComponent,
    FirstworldComponent,
    BattleComponent,
    ShopComponent,
    FullBagComponent,
    HelpComponent,
    FullStatsComponent,
    RegComponent,
    IntropageComponent,
    LogComponent
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,

    HttpClientModule,
    BrowserModule,

    NgbModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()

  ],
  exports: [

  ],
  providers: [
    CharacterService,
    BattleService,
    AudioService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
