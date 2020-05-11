import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  constructor(
    private http: HttpClient
    ) { }

  getMatches() {
    return this.http.get(environment.apiUrl + '/matches').pipe(
      map( data => {
        return data
      })
    );

  }

  submitMatch(match: any) {
    console.log('log iz serrrvisa', match);
    
    return this.http.post(environment.apiUrl + '/matches', match);
  }

  deleteMatches(id) {
    return this.http.delete(environment.apiUrl +  '/matches/' + id);
    
  }

  updateMatch(id, match) {
    return this.http.put(environment.apiUrl + '/' + id, match)
  }

}
