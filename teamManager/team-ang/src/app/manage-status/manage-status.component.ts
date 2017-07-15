import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { ApiService } from '../player.service';

@Component({
  selector: 'app-manage-status',
  templateUrl: './manage-status.component.html',
  styleUrls: ['./manage-status.component.css']
})
export class ManageStatusComponent implements OnInit {
  game: number = 1;
  gameKey: String = 'game1';
  players: Array<Player>;
  
  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers() {
    this._api.retrieveAll()
    .then((players) => { this.players = players; })
    .catch((err) => { console.log(err);})
  }

  savePlayer(player) {
    this._api.update(player)
    .then(() => {this.getPlayers()})
    .catch((err) => {console.log(err)});
  }

  game1() {
    this.game = 1;
    this.gameKey = 'game1';
  }

  game2() {
    this.game = 2;
    this.gameKey = 'game2';
  }

  game3() {
    this.game = 3;
    this.gameKey = 'game3';
  }

  playing(player) {
    for (let p of this.players) {
      if (p == player) {
        let key = "game" + this.game.toString();
        p.games[key] = "playing";
        break;
      }
    }
    this.savePlayer(player);
  }

  notPlaying(player) {
    for (let p of this.players) {
      if (p == player) {
        let key = "game" + this.game.toString();
        p.games[key] = "not playing";
        break;
      }
    }
    this.savePlayer(player);
  }

  undecided(player) {
    for (let p of this.players) {
      if (p == player) {
        let key = "game" + this.game.toString();
        p.games[key] = "undecided";
        break;
      }
    }
    this.savePlayer(player);
  }

}
