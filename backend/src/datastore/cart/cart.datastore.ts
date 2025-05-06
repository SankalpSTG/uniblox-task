import { Injectable, NotFoundException } from "@nestjs/common";
import { CartItemType, CartType } from "./types";

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
  getCart(cartId: string): CartType | null{
    let cart = this.carts.get(cartId)
    if(!cart) return null
    return cart
  }
  addToCart(cartId: string, item: CartItemType){
    let cart = this.carts.get(cartId)
    if(!cart) throw new NotFoundException("Cart Not Found")
    cart.items.push(item)
    this.carts.set(cartId, cart)
  }
}