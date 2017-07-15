import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../player.service';
import { Router } from '@angular/router';
import { Player } from '../../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  allPlayers: Array<Player>;

  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this._api.retrieveAll()
    .then((players) => {
      this.allPlayers = players;})
    .catch((err) => {console.log(err)});
  }

  deletePlayer(player) {
    let del = confirm(`Are you sure you want to remove ${player.pname}?`);
    if (del) {
      this._api.destroy(player)
      .then(() => {this.getPlayers();})
      .catch((err) => {console.log("the error is:", err)});
    }
  }
}
