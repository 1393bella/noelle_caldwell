import { Component } from '@angular/core';
import { Player } from '../../player';
import { Router } from '@angular/router';
import { ApiService } from '../../player.service';


@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent {
  player = new Player();

  constructor(private _api: ApiService, private _router: Router) {}

  addPlayer() {
    this._api.create(this.player)
    .then(() => {this._router.navigate(['/manage/player/list'])})
    .catch((err) => {console.log(err)});
  }

}
