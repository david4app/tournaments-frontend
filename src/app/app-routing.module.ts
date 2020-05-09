import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location/location.component';
import { LocationFormComponent } from './location/location-form/location-form.component';
import { TournamentComponent } from './tournament/tournament.component';
import { MatchesComponent } from './matches/matches.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'location', component: LocationComponent},
  { path: 'location/new', component: LocationFormComponent },
  { path: 'location/:id', component: LocationFormComponent },
  { path: 'tournaments', component: TournamentComponent},
  { path: 'matches', component: MatchesComponent},
  { path: 'tournaments/new', component: LocationFormComponent },
  { path: 'tournaments/:id', component: LocationFormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }