import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location/location.component';
import { LocationFormComponent } from './location/location-form/location-form.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchComponent } from './match/match.component';
import { TournamentFormComponent } from './tournament-form/tournament-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'location', component: LocationComponent},
  { path: 'location/new', component: LocationFormComponent },
  { path: 'location/:id', component: LocationFormComponent },
  { path: 'tournaments', component: TournamentComponent},
  { path: 'tournaments/new', component: TournamentFormComponent },
  { path: 'tournaments/:id', component: TournamentFormComponent },
  { path: 'match', component: MatchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }