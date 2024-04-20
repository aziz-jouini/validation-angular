import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  addMatchForm !: FormGroup
  match:any={
  
  }
  constructor () {

  }
  ngOnInit() {

  }
  addMatch() {
    let T =JSON.parse(localStorage.getItem("matches") || "[]")
    let matcheId=JSON.parse(localStorage.getItem("matcheId") || "0")
    this.match.id=matcheId
    T.push(this.match)
   localStorage.setItem("matches",JSON.stringify(T))
   localStorage.setItem("matcheId",JSON.stringify(matcheId+1))
    
    
  }
}
