import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{

  properties: Array<any> = [
  {
    "Id":1,
    "Name": "Mark's House",
    "Type": "House",
    "Price": 12000
  },
  {
    "Id":2,
    "Name": "Michael's House",
    "Type": "House",
    "Price": 5000
  },
  {
    "Id":3,
    "Name": "Maddy's House",
    "Type": "House",
    "Price": 100000
  },
  {
    "Id":4,
    "Name": "Mom's House",
    "Type": "House",
    "Price": 35000
  },
  {
    "Id":5,
    "Name": "Cheryl's House",
    "Type": "House",
    "Price": 112000
  },
  {
    "Id":6,
    "Name": "Jenny's House",
    "Type": "House",
    "Price": 172000
  },
]

constructor() {}

ngOnInit(): void {

}
}
