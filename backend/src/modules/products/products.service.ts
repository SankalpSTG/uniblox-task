import { Injectable } from '@nestjs/common';
import { ProductsDataStore } from 'src/datastore/products/products.datastore';
import { ProductType } from 'src/datastore/products/types';

@Injectable()
export class ProductsService {
  constructor(private readonly productsDataStore: ProductsDataStore){}

  getProducts(): ProductType[]{
    return this.productsDataStore.getProducts()
  }
  
  getProduct(id: string): ProductType | null{
    return this.productsDataStore.getProduct(id)
  }
}
