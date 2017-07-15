import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';

import { PlayerCreateComponent } from './manage-players/player-create/player-create.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/manage/player/list', pathMatch: 'full'},
  { path: 'manage', component: ManagePlayersComponent,
    children: [
      { path: 'player/list', component: PlayerListComponent },
      { path: 'player/new', component: PlayerCreateComponent }
    ]
  },
  { path: 'manageStatus', component: ManageStatusComponent },
  { path: 'updated', redirectTo: '/manage/player/list'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
