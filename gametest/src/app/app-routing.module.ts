import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InGameComponent } from './in-game/in-game.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StatsComponent } from './stats/stats.component';
import { BagComponent } from './bag/bag.component';
import { FirstworldComponent } from './in-game/firstworld/firstworld.component';
import { SecondworldComponent } from './in-game/secondworld/secondworld.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent},
    { path: 'in-game',   component: InGameComponent,
    children: [

        {path: 'in-game/firstworld', component: FirstworldComponent},
        {path: 'in-game/secondworld', component: SecondworldComponent},
    ]},

    {path: 'firstworld', component: FirstworldComponent},

    { path: 'home/in-game',   component: InGameComponent, children: [
        {path: 'home/in-game/firstworld', component: FirstworldComponent},
        {path: 'home/in-game/secondworld', component: SecondworldComponent},
    ]
},

    { path: 'stats',  component: StatsComponent},
    { path: 'bag', component: BagComponent},




];
const routes2: Routes = [
    { path: '', redirectTo: '/in-game', pathMatch: 'full' },
    { path: 'home', component: InGameComponent},
    { path: 'in-game',   component: InGameComponent},
    { path: 'home/in-game',   component: InGameComponent},
    { path: 'stats',  component: StatsComponent},
    { path: 'bag', component: BagComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
