import { BadRequestException, Injectable } from "@nestjs/common";
import { CartType } from "./types";
import {convert} from "any-to-any"
@Injectable()
export class CartDataStore {
  private readonly carts = new Map<string, CartType>()
  
  createCart(){
    const cart: CartType = {
      cartId: convert(new Date().getTime(), 10, 36),
      items: []
    }
    this.carts.set(cart.cartId, cart)
    return cart.cartId
  }
  getCart(cartId?: string): CartType{
    if(!cartId) return this.carts.get(this.createCart())!
    let cart = this.carts.get(cartId)
    if(!cart) throw new BadRequestException("Invalid Cart ID Provided")
    return cart
  }
  updateCart(cart: CartType){
    this.carts.set(cart.cartId, cart)
  }
}