import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit{

  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Mark's",
      "Type": "House",
      "Price": 412000
    },
    {
      "Id": 2,
      "Name": "Maddy's",
      "Type": "House",
      "Price": 312000
    },
    {
      "Id": 3,
      "Name": "Mom's",
      "Type": "House",
      "Price": 112000
    },
    {
      "Id": 4,
      "Name": "Dad's",
      "Type": "House",
      "Price": 120000
    },
    {
      "Id": 5,
      "Name": "Chance's",
      "Type": "House",
      "Price": 100000
    },
    {
      "Id": 6,
      "Name": "Michael's",
      "Type": "House",
      "Price": 150000
    },
  ]
constructor() {}

ngOnInit(): void {

}
}
