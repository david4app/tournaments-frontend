import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TournamentService } from 'src/app/tournament.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {


  public tournament: any = {};
  public tournamentResponse: any = {};
  // public cities: any = [];
  // public selectedCityId: any = {};
  public errorMessage = '';

  tournamentGroup = this.fb.group({
      TournamentId: [''],
      tournament_name: [''],
      date_from: [''],
      date_to: ['']
  });

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private tournamentService: TournamentService) { }

              ngOnInit() {
                this.route.params.subscribe((params: any) => {
                  const tournamentId = params.id;
                  // this.getCities();
                  if (tournamentId != null) {
                    
                    this.getTournament(tournamentId);
                    console.log('tournament', this.tournament);
                    
                    console.log('response', this.tournamentResponse);
                    
                    this.tournamentGroup.patchValue({TournamentId: tournamentId,
                      tournament_name: this.tournamentResponse.tournament_name,
                      date_from: this.tournamentResponse.date_from,
                      date_to: this.tournamentResponse.date_to});
                  }
                });
              }

  getTournament(tournamentId) {
    this.tournamentService.getOne(tournamentId).subscribe(response => {
      this.tournament = response;
      console.log(this.tournament);
      
      this.tournamentResponse = this.tournament.response;
      this.tournament.id = tournamentId;
      // this.selectedCityId = this.location.cityId;
    });

  }

  onSubmit() {
    console.log(this.tournamentGroup.value);
    this.tournamentService.submitTournament(this.tournamentGroup.value).subscribe(a => console.log('test submit')
    );
    this.router.navigate(['/tournaments']);
  }
  
  cancelForm() {
    this.router.navigate(['/tournaments']);
  }
}
