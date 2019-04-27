import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AddPlayerPanelComponent} from './add-player-panel/add-player-panel.component';
import {BattleViewComponent} from './battle-view/battle-view.component';

const routes: Routes = [
    {path: ``, component: DashboardComponent},
    {path: `addPanel`, component: AddPlayerPanelComponent},
    {path: `battleView`, component: BattleViewComponent},
    {path: `**`, component: NotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
