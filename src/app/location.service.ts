import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(
    private http: HttpClient
    ) { }

  getLocations() {
    return this.http.get(environment.apiUrl + '/locations').pipe(
      map( data => {
        return data
      })
    );
  }


  submitLocation(location: any) {
    console.log('log iz servisa',location);
    
    return this.http.post(environment.apiUrl + '/locations', location);
  }

  deleteLocation(id) {
    return this.http.delete(environment.apiUrl +  '/locations/' + id);
    
  }

  updateLocation(id, location) {
    return this.http.put(environment.apiUrl + '/locations/' + id, location)
  }

  getOne(id) {
    console.log(id);
    
    return this.http.get(environment.apiUrl + '/locations/' + id);
  }

}
