import { Injectable } from "@nestjs/common"
import { ProductType } from "./types"
import { products } from "./data/data"
@Injectable()
export class ProductsDataStore {
  private readonly products: ProductType[] = products
  getProducts(){
    return this.products
  }
  getProduct(id: string): ProductType | null{
    for(let i = 0; i < this.products.length; i++){
      if(this.products[i].productId == id){
        return this.products[i]
      }
    }
    return null
  }
}