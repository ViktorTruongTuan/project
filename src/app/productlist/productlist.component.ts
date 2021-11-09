import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  images = [1,2,3].map((n) => `../../assets/carousel${n}.jpg`);
  constructor() { }

  ngOnInit(): void {
  }

}
