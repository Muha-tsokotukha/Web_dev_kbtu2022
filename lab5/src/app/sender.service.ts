import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SenderService {

  public ProdCategory: number = -1;

  selectCateg(id: number){
    this.ProdCategory = id;
  }

  getCateg(){
    return this.ProdCategory;
  }

  constructor() { 
    this.ProdCategory = -1;
  }
}
