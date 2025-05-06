import { Injectable } from "@nestjs/common";
import { CartType } from "./types";

@Injectable()
export class CartDataStore {
  private readonly carts = new Map<string, CartType>()
  
  createCart(){
    const cart: CartType = {
      cartId: "",
      items: []
    }
    this.carts.set(cart.cartId, cart)
    return cart.cartId
  }
  getCart(cartId?: string): CartType{
    if(!cartId) return this.carts.get(this.createCart())!
    let cart = this.carts.get(cartId)
    if(!cart) return this.carts.get(this.createCart())!
    return cart
  }
  updateCart(cart: CartType){
    this.carts.set(cart.cartId, cart)
  }
}