import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {

  matches: any;
  matchArray: any;
  constructor(
    private matchservice: MatchService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getMatches()

    console.log('test');
  }

  getMatches() {
    this.matchservice.getMatches().subscribe(data => {
      this.matches =  data;
      console.log(this.matches.response);
      this.matchArray =this.matches.response;
      
    })
  }

  deleteMatch(id) {
    this.matchservice.deleteMatches(id).subscribe(a => console.log('test delete')
    )
  }

  editMatch(id) {
    this.matchservice.updateMatch(id, Object).subscribe(a => console.log('test update')
    )
  }

  onAdd() {
    this.router.navigate(['match/new']);
  }

   onEdit(matchId) {
    this.router.navigate(['match', matchId]);
  }
}
