import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  registerUser(user) {
    return this._http.post('/register', user).map(data => data.json()).toPromise();
  }

  loginUser(user) {
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }

  getCurrentUser() {
    return this._http.get('/currentUser').map(data => data.json()).toPromise();
  }

  logout() {
    return this._http.get('/logout').map(data => data.json()).toPromise();
  }

  getContactInfo(user_id) {
    return this._http.post('/contact', user_id).map(data => data.json()).toPromise();
  }

  addBike(bike) {
    return this._http.post('/bicycle', bike).map(data => data.json()).toPromise();
  }

  getRandomBike() {
    return this._http.get('/bikeOfTheDay').map(data => data.json()).toPromise();
  }

  getAllUserBikes() {
    return this._http.get('/myBicycles').map(data => data.json()).toPromise();
  }

  getAllBikes() {
    return this._http.get('/bicycles').map(data => data.json()).toPromise();
  }

  filterBikes(search) {
    return this._http.post('/bicycles/search', search).map(data => data.json()).toPromise();
  }

  updateBike(bike) {
    return this._http.post('/bicycle/edit', bike).map(data => data.json()).toPromise();
  }

  deleteBike(bike) {
    return this._http.post('/bicycle/destroy', bike).map(data => data.json()).toPromise();
  }
}
