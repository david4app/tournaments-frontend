import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocationsService } from 'src/app/location.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnInit {


  public location: any = {};
  public locationResponse: any = {};
  // public cities: any = [];
  // public selectedCityId: any = {};
  public errorMessage = '';

  locationGroup = this.fb.group({
      LocationId: [''],
      street: [''],
      town: [''],
      zip: ['']
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private locationService: LocationsService) { }

              ngOnInit() {
                this.route.params.subscribe((params: any) => {
                  const locationId = params.id;
                  // this.getCities();
                  if (locationId != null) {
                    
                    this.getLocation(locationId);
                    console.log('location', this.location);
                    
                    console.log('response', this.locationResponse);
                    
                    this.locationGroup.patchValue({LocationId: locationId,
                      street: this.locationResponse.street,
                      town: this.locationResponse.town,
                      zip: this.locationResponse.zip});
                  }
                });
              }

  getLocation(locationId) {
    this.locationService.getOne(locationId).subscribe(response => {
      this.location = response;
      console.log(this.location);
      
      this.locationResponse = this.location.response;
      this.location.id = locationId;
      // this.selectedCityId = this.location.cityId;
    });

  }

  onSubmit() {
    console.log(this.locationGroup.value);
    this.locationService.submitLocation(this.locationGroup.value).subscribe(a => console.log('test submit')
    );
  }
  
  cancelForm() {
    this.router.navigate(['locations']);
  }
}
