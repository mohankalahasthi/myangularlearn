import { Component, OnInit } from '@angular/core';
import { EcommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor( private ecommerceService:EcommerceService) { }

  products = [
    {  id: 1,
       name: "TV", 
       image: "../assets/tv.jpg",
       desc:"mi 32inches smart tv "
      },
      { id: 2,
        name: "Freezer", 
        image: "../assets/freeze.jpg", 
        desc:"Godrej 140 lit freezer"
       },
       { id: 3,
        name: "Washing mission", 
        image: "../assets/washing.png", 
        desc:"Whirlphool automatic machine "      
       },
       { id: 4,
        name: "mobile", 
        image: "../assets/note.jpg", 
        desc:"Samsung Note 4"  
       },
    ]

  ngOnInit() {
    
  }
  addcard(item){
    // console.log(item);
    this.ecommerceService.receiveProducts(item);
  }

}
