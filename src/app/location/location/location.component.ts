import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  locations: any;
  locationArray: any;
  constructor(
    private locationservice: LocationsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getLocations()

    console.log('test');
  }

  getLocations() {
    this.locationservice.getLocations().subscribe(data => {
      this.locations =  data;
      console.log(this.locations.response);
      this.locationArray =this.locations.response;
      
    })
  }

  deleteLocation(id) {
    this.locationservice.deleteLocation(id).subscribe(result =>{this.getLocations();
    });
    
  }

  editLocation(id) {
    this.locationservice.updateLocation(id, Object).subscribe(a => console.log('test update')
    )
  }

  onAdd() {
    this.router.navigate(['location/new']);
  }

   onEdit(locationId) {
    this.router.navigate(['location', locationId]);
  }
}
