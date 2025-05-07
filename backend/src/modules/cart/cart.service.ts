import { BadRequestException, Injectable } from '@nestjs/common';
import { CartDataStore } from 'src/datastore/cart/cart.datastore';
import { ProductType } from '@/datastore/products/types';
import { CartProductItem } from '@/datastore/cart/types';
import { AddItemToCartType } from './types';

@Injectable()
export class CartService {
  constructor(
    private readonly cartDataStore: CartDataStore
  ){}
  addItemToCart(data: AddItemToCartType){
    const cart = this.cartDataStore.getCart(data.cartId)
    if(cart.isLocked) throw new BadRequestException("Invalid Cart")
    for(let i = 0; i < cart.items.length; i++){
      if(cart.items[i].product.productId == data.product.productId){
        cart.items[i].quantity += 1
        this.cartDataStore.updateCart(cart)
        return cart
      }
    }
    cart.items.push({product: data.product, quantity: 1, costPerItem: data.costPerItem})
    this.cartDataStore.updateCart(cart)
    return cart
  }
  getCart(cartId: string){
    return this.cartDataStore.getCart(cartId)
  }
  lockCart(cartId: string){
    return this.cartDataStore.lockCart(cartId)
  }
}
