import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-match',
  templateUrl: './table-match.component.html',
  styleUrls: ['./table-match.component.css']
})
export class TableMatchComponent {
  matches: any = []

  constructor(private router:Router) {}
  ngOnInit () {
    this.getAllMatches()

  }
  getAllMatches() {
    this.matches= JSON.parse(localStorage.getItem('matches') || '[]')
    console.log('herre are all matches',this.matches);
    
  }
  delete(id:any) {
    for (let i = 0; i < this.matches.length; i++) {
      if (id === this.matches[i].id) {
        this.matches.splice(i,1)
      }
      
      
    }
    localStorage.setItem("matches",JSON.stringify(this.getAllMatches))
    console.log("this match is ", this.matches);
  }
  edit(id:any) {
    for (let i = 0; i < this.matches.length; i++) {
      localStorage.setItem('match', JSON.stringify(this.matches[i]));
      // Naviguez vers la page add-match
      this.router.navigate(['/add-match']);
      
      
    }
    
    console.log("this match is ", this.matches);
  }

}
