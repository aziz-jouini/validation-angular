import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  addMatchForm !: FormGroup
  match:any={}
  constructor () {

  }
  ngOnInit() {
    this.match = JSON.parse(localStorage.getItem('match') ?? '{}');
    

  }
  addMatch() {
    let matches = JSON.parse(localStorage.getItem("matches") || "[]");
    let matchId = JSON.parse(localStorage.getItem("matcheId") || "0");
    
    
    let matchIndex = matches.findIndex((match: any) => match.id === this.match.id);

    if (matchIndex !== -1) {
        // Mise a jour de donnee
        matches[matchIndex] = this.match;
    } else {
        // si le match n'existe pas , creer un nouveau match 
        this.match.id = matchId;
        matches.push(this.match);
        localStorage.setItem("matcheId", JSON.stringify(matchId + 1)); 
    }

    
    localStorage.setItem("matches", JSON.stringify(matches));
}

}
