import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CartType } from "./types";
import {convert} from "any-to-any"
@Injectable()
export class CartDataStore {
  private readonly carts = new Map<string, CartType>()
  
  createCart(){
    const cart: CartType = {
      cartId: (new Date().getTime()).toString(36) + Math.round(Math.random() * 1000).toString(36),
      items: [],
      isLocked: false
    }
    this.carts.set(cart.cartId, cart)
    return cart.cartId
  }
  getCart(cartId?: string): CartType{
    if(!cartId) return this.carts.get(this.createCart())!
    let cart = this.carts.get(cartId)
    if(!cart) throw new NotFoundException("Cart Not Found")
    return cart
  }
  updateCart(cart: CartType){
    this.carts.set(cart.cartId, cart)
  }
  lockCart(cartId: string){
    let cart = this.carts.get(cartId)
    if(!cart) return
    cart.isLocked = true
    this.carts.set(cartId, cart)
  }
}