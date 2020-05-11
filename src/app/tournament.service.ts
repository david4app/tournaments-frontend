import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(
    private http: HttpClient
    ) { }

  getTournaments() {
    return this.http.get(environment.apiUrl + '/tournaments').pipe(
      map( data => {
        return data
      })
    );

  }

  submitTournament(tournament: any) {
    console.log('log iz servisa', tournament);
    
    return this.http.post(environment.apiUrl + '/tournaments', tournament);
  }

  deleteTournament(id) {
    return this.http.delete(environment.apiUrl +  '/tournaments/' + id);
    
  }

  updateTournament(id, tournament) {
    return this.http.put(environment.apiUrl + '/' + id, tournament)
  }

  getOne(id) {
    console.log(id);
    
    return this.http.get(environment.apiUrl + '/tournaments/' + id);
  }

}
