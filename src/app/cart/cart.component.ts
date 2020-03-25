import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  selectProduct:any = [];
  // removeProduct:any = [];
  constructor(private ecommerceService:EcommerceService) {
  this.ecommerceService.getproduct().subscribe(data =>{
    console.log(data)
    this.selectProduct.push(data);
  })

   }
  ngOnInit() {
  }
  remove(item){
    console.log(item);
  }
}
