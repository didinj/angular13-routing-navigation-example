import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoBedroom(message: String) {
    this.router.navigate(['/bedroom', { message: message }]);
    // this.router.navigate(['/bedroom'], { queryParams: { message: message } });
  }

}
