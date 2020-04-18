import { Component, OnInit } from '@angular/core';
import { data } from '../MockData';
import { Bike } from '../Bike1';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
items = data;
page = 1;
pageSize = 10;
  constructor() { }

  ngOnInit() {
  }

}