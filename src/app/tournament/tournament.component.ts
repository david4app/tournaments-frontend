import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../tournament.service';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss']
})
export class TournamentComponent implements OnInit {

  tournaments: any;
  tournamentArray: any;
  constructor(
    private tournamentservice: TournamentService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.getTournaments()

    console.log('test');
  }

  getTournaments() {
    this.tournamentservice.getTournaments().subscribe(data => {
      this.tournaments =  data;
      console.log(this.tournaments.tournaments);
      this.tournamentArray =this.tournaments.tournaments;
      
    })
  }

  deleteTournament(id) {
    this.tournamentservice.deleteTournament(id).subscribe(a => {
    this.getTournaments();
    } )
  }

  editTournament(id) {
    this.tournamentservice.updateTournament(id, Object).subscribe(a => console.log('test update')
    )
  }

  onAdd() {
    this.router.navigate(['tournament/new']);
  }

   onEdit(tournamentId) {
    this.router.navigate(['tournaments', tournamentId]);
  }
}
