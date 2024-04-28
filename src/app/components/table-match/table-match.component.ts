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
        this.matches.splice(i, 1)
      }
      
      
    }
    localStorage.setItem("matches",JSON.stringify(this.matches))
    console.log("this match is ", this.matches);
  }
  navigate(id:any) {
    this.router.navigate(["add-match/"+ id])
  }
  

}
