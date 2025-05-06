import { Injectable } from '@nestjs/common';
import { CartDataStore } from 'src/datastore/cart/cart.datastore';
import { CartItemType } from 'src/datastore/cart/types';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { CartItemTypeWithoutQuantity } from './types';

@Injectable()
export class CartService {
  constructor(
    private readonly cartDataStore: CartDataStore
  ){}
  addItemToCart(item: CartItemTypeWithoutQuantity, cartId?: string){
    const cart = this.cartDataStore.getCart(cartId)
    for(let i = 0; i < cart.items.length; i++){
      if(cart.items[i].productId == item.productId){
        cart.items[i].quantity += 1
        this.cartDataStore.updateCart(cart)
        return
      }
    }
    cart.items.push({...item, quantity: 1})
    this.cartDataStore.updateCart(cart)
  }
}
