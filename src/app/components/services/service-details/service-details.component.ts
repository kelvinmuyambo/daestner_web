import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {

  @Input() service: any;
  constructor() { }

  ngOnInit() {
  }

}
