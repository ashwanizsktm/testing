import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  profileForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
