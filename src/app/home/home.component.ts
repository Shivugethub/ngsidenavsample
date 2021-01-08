import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dataSource:{Id:number,Subject:string,StartTime:string,EndTime:string}[] = [
    {
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: "Thu Feb 15 2018 09:30:00 GMT+0530",
        EndTime: "Thu Feb 15 2018 11:00:00 GMT+0530"
    }, {
        Id: 2,
        Subject: 'Thule Air Crash Report',
        StartTime: "Mon Feb 12 2018 12:00:00 GMT+0530",
        EndTime: "Mon Feb 12 2018 14:00:00 GMT+0530"
    }, {
        Id: 3,
        Subject: 'Blue Moon Eclipse',
        StartTime: "Tue Feb 13 2018 09:30:00 GMT+0530",
        EndTime: "Tue Feb 13 2018 11:00:00 GMT+0530"
    }, {
        Id: 4,
        Subject: 'Meteor Showers in 2018',
        StartTime: "Wed Feb 14 2018 13:00:00 GMT+0530",
        EndTime: "Wed Feb 14 2018 14:30:00 GMT+0530"
    }
  ];
  constructor() { }

}
