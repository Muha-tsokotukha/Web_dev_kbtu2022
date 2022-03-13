import { Component } from '@angular/core';
import { products } from '../products';
import { SenderService } from '../sender.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  categId = -1;
  constructor(private service: SenderService){
    this.categId = service.ProdCategory;
  }
  getCategory(){
    this.categId = this.service.getCateg();    
  }
  deleteProd(id: number){
    console.log(id);
    this.products.forEach((element,index)=>{
      if(element.id==id+1) this.products.splice(index, 1);
   });
  }
}
