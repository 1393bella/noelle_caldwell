import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Bicycle } from '../../bicycle';
import { ApiService } from '../../bicycle.service';

@Component({
  selector: 'app-user-bikes',
  templateUrl: './user-bikes.component.html',
  styleUrls: ['./user-bikes.component.css']
})
export class UserBikesComponent implements OnInit {
  newBike: Bicycle = new Bicycle();
  hasImage: boolean = false;
  myBikes: Array<Bicycle>;

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this.getBikes();
  }

  getBikes() {
    this._api.getAllUserBikes()
    .then((bikes) => { this.myBikes = bikes; })
    .catch((err) => { console.log(err); });
  }

  linkPhoto() {
    this.newBike.image = prompt("Please enter the url for your photo:");
    if (this.newBike.image != "") {
      this.hasImage = true;
    }
  }

  editPhoto(idx) {
    this.myBikes[idx].image = prompt("Please enter the new url for your photo:");
  }

  addBike() {
    this._api.addBike(this.newBike)
    .then(() => { this.getBikes(); })
    .catch((err) => { console.log(err); });
  }

  updateBike(idx) {
    this._api.updateBike(this.myBikes[idx])
    .then(() => { this.getBikes(); })
    .catch((err) => { console.log(err); });
  }

  deleteBike(idx) {
    this._api.deleteBike(this.myBikes[idx])
    .then(() => { this.getBikes(); })
    .catch((err) => { console.log(err); });
  }
}
