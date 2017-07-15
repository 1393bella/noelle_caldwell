import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ApiService } from './player.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { PlayerCreateComponent } from './manage-players/player-create/player-create.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    PlayerCreateComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
