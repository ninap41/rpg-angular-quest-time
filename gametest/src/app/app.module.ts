import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module"; // Routing
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // Materials

import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Routes, RouterModule } from "@angular/router";
import { CharacterService } from "./character.service";
import { BattleService } from "./battle.service";
import { AudioService } from "./audio.service";

import { InGameComponent } from "./in-game/in-game.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { StatsComponent } from "./stats/stats.component";
import { BagComponent } from "./bag/bag.component";
import { FirstworldComponent } from "./in-game/firstworld/firstworld.component";
import { ShopComponent } from "./shop/shop.component";
import { HelpComponent } from "./help/help.component";
import { IntropageComponent } from "./intropage/intropage.component";

@NgModule({
  declarations: [
    AppComponent,
    InGameComponent,
    HomepageComponent,
    StatsComponent,
    BagComponent,
    FirstworldComponent,
    ShopComponent,
    HelpComponent,
    IntropageComponent,
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  exports: [],
  providers: [CharacterService, BattleService, AudioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
