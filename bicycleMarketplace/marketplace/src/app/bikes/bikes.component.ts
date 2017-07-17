import { Component, OnInit } from '@angular/core';
import { ApiService } from '../bicycle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {
  constructor(private _api: ApiService, private _router: Router) { }

  ngOnInit() {
    this._api.getCurrentUser() 
    .then((user) => { })
    .catch((err) => { this._router.navigate(['/login']); });
  }

  logout() {
    this._api.logout()
    .then(() => { this._router.navigate(['/login']); })
    .catch((err) => { console.log(err); });
  }

}
