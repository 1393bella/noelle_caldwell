import { Component, OnInit } from '@angular/core';
import { Bicycle } from '../../bicycle';
import { User } from '../../user';
import { ApiService } from '../../bicycle.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  allBikes: Array<Bicycle>;
  contact = { name: '', email: '' };
  currentUserId: string;
  searchStr: string = '';

  constructor(private _api: ApiService) { 
    this.contact.name = '';
    this.contact.email = '';
  }

  ngOnInit() {
    this.getAllBikes();
    this._api.getCurrentUser()
    .then((user) => { this.currentUserId = user.id; })
    .catch((err) => { console.log(err); });
  }

  getAllBikes() {
    this._api.getAllBikes()
    .then((bikes) => { this.allBikes = bikes; })
    .catch((err) => { console.log(err); });
  }

  getContactInfo(user_id) {
    this._api.getContactInfo({id: user_id})
    .then((info) => { 
      this.contact.name = info.name;
      this.contact.email = info.email;
      let modal = document.getElementById('contactModal');
      modal.style.display = "block";
    })
    .catch((err) => { console.log("error", err); });
  }

  deleteBike(bike) {
    this._api.deleteBike(bike)
    .then(() => { this.getAllBikes(); })
    .catch((err) => { console.log(err); });
  }

  closeModal() {
    let modal = document.getElementById('contactModal');
    modal.style.display = "none";
  }

}
