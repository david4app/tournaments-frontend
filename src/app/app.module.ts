import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationComponent } from './location/location/location.component';
import { LocationFormComponent } from './location/location-form/location-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from './match/match.component';
import { TournamentFormComponent } from './tournament-form/tournament-form.component';
import { FilterPipe } from './filter.pipe';



  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      LocationComponent,
      LocationFormComponent,
      TournamentComponent,
      MatchComponent,
      TournamentFormComponent,
      FilterPipe,
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      BrowserAnimationsModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }