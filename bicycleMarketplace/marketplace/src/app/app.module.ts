import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CommunicationService } from './communication.service';
import { ApiService } from './bicycle.service';

import { EqualValidator } from './equal-validator.directive';
import { MinValue } from './minvalue.directive';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BikesComponent } from './bikes/bikes.component';
import { BikeListComponent } from './bikes/bike-list/bike-list.component';
import { UserBikesComponent } from './bikes/user-bikes/user-bikes.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BikesComponent,
    BikeListComponent,
    UserBikesComponent,
    EqualValidator,
    MinValue,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService, 
              CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
