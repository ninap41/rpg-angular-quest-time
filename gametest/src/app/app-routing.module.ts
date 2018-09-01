import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { InGameComponent } from './in-game/in-game.component';
import { HomepageComponent } from './homepage/homepage.component';
import { StatsComponent } from './stats/stats.component';
import { BagComponent } from './bag/bag.component';
import { FirstworldComponent } from './in-game/firstworld/firstworld.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
    { path: '', component: HomepageComponent, pathMatch: 'full' },
    { path: 'home', component: HomepageComponent, data: { state: 'home' } },
    { path: 'in-game',   component: InGameComponent, data: { state: 'in-game' } ,
    children: [
        {path: 'in-game/firstworld', component: FirstworldComponent, },
    ]},

    {path: 'firstworld', component: FirstworldComponent, data: { state: 'firstworld' },
    children: [
        { path: 'home/first-world/bag', component: BagComponent },
        { path: 'home/first-world/help', component: HelpComponent },
        { path: 'first-world/help', component: HelpComponent},
    ]},
        { path: 'home/in-game',   component: InGameComponent, data: { state: 'home/in-game' },
        children: [
        { path: 'home/in-game/firstworld', component: FirstworldComponent },
    ]
},
        { path: 'help',  component: HelpComponent, data: { state: 'help' }},
        { path: 'firstworld/help',  component: HelpComponent, data: { state: 'firstworld/help' }},
        { path: 'stats',  component: StatsComponent, data: { state: 'stats' }},
        { path: 'bag', component: BagComponent, data: { state: 'bag' }},
        { path: '**', component: HelpComponent, data: { state: 'help' } }

];

const routes2: Routes = [
    { path: '', redirectTo: '/in-game', pathMatch: 'full' },
    { path: 'home', component: InGameComponent, data: { state: 'home' }},
    { path: 'in-game',   component: InGameComponent, data: { state: 'in-game' }},
    { path: 'home/in-game',   component: InGameComponent, data: { state: 'home/in-game' }},
    { path: 'stats',  component: StatsComponent, data: { state: 'stats' }},
    { path: 'bag', component: BagComponent, data: { state: 'bag' }},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
