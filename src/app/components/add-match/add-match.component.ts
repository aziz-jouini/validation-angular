import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent {
  addMatchForm !: FormGroup
  match: any = {}
  id: any
  title: string = "Add"
  constructor(private router: Router, private activatedrouter: ActivatedRoute) {


  }
  ngOnInit() {
    this.id = this.activatedrouter.snapshot.paramMap.get("id")
    console.log("this is the id:", this.id);
    if (this.id) {
      this.title = "Edit"
      this.getMatchById()
    }

  }
  addEditMatch() {
    if (this.id) {
      let matches = JSON.parse(localStorage.getItem("matches") || "[]")
      for (let i = 0; i < matches.length; i++) {
        if (matches[i].id === Number(this.id)) {
          console.log("the match is", matches[i]);
          matches[i] = this.match


        }

      }
      
       localStorage.setItem("matches",JSON.stringify(matches))
       this.router.navigate(["table-match"])

    } else {
      let T = JSON.parse(localStorage.getItem("matches") || "[]")
      let matcheId = JSON.parse(localStorage.getItem("matcheId") || "0")
      this.match.id = matcheId
      T.push(this.match)
      localStorage.setItem("matches", JSON.stringify(T))
      localStorage.setItem("matcheId", JSON.stringify(matcheId + 1))
      this.router.navigate(["table-match"])

    }




  }
  getMatchById() {
    let matches = JSON.parse(localStorage.getItem("matches") || "[]")
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].id === Number(this.id)) {
        console.log("the match is", matches[i]);
        this.match = matches[i]


      }

    }
  }
}
