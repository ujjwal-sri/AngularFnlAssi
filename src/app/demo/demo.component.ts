import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
list:Employee[];
//eid,ename,desig,joindate,salary
  constructor() {
      this.list=[
        {eid:'E0001',ename:'Raman',desig:'SDE',joindate:new Date(2020,5,10),salary:20000},
        {eid:'E0002',ename:'Ram',desig:'SDE',joindate:new Date(2020,5,11),salary:21000},
        {eid:'E0003',ename:'Sinbad',desig:'SDE',joindate:new Date(2020,5,17),salary:22000}
      ]
  }

  ngOnInit(): void {
  }

}
