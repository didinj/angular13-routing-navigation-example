import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {

  message: String = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.message = this.route.snapshot.paramMap.get('message') || '';
    // this.route.queryParams.subscribe(params => {
    //   this.message = params['message'] || '';
    // });
  }

}
