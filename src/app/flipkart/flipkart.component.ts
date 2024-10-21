import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {
  id:number=1;
  productName:string="";
  price:number=0;
  rating:number=0;
  deliveryDate:any=0;
  freeDelivary:boolean=false;

  products:any=[];
    
  submit1(){
    let product={
      name:this.productName,
      price:this.price,
      rating:this.rating,
      delivaryDate:this.deliveryDate,
      freeDelivary:this.freeDelivary
    }
    this.products.push(product);
  }
  del(i:number){
    this.products.splice(i,1)
  }


}
