import { BadRequestException, Injectable } from '@nestjs/common';
import { CartItemTypeWithoutQuantity } from './types';
import { CartDataStore } from 'src/datastore/cart/cart.datastore';

@Injectable()
export class CartService {
  constructor(
    private readonly cartDataStore: CartDataStore
  ){}
  addItemToCart(item: CartItemTypeWithoutQuantity, cartId?: string){
    const cart = this.cartDataStore.getCart(cartId)
    if(cart.isLocked) throw new BadRequestException("Invalid Cart")
    for(let i = 0; i < cart.items.length; i++){
      if(cart.items[i].productId == item.productId){
        cart.items[i].quantity += 1
        this.cartDataStore.updateCart(cart)
        return cart
      }
    }
    cart.items.push({...item, quantity: 1})
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
