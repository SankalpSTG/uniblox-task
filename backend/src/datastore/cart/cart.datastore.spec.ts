import { CartDataStore } from "./cart.datastore";
import { NotFoundException } from "@nestjs/common";

describe('CartDataStore', () => {
  let dataStore: CartDataStore

  beforeEach(async () => {
    dataStore = new CartDataStore()
  });
  afterEach(async () => {
    jest.restoreAllMocks()
  })

  it("should create a cart and return cartId", () => {
    const mockTime = 1715000000000; // arbitrary fixed timestamp
    const mockRandom = Math.round(0.5 * 1000)
    const spy = jest.spyOn(Date.prototype, 'getTime').mockReturnValue(mockTime);
    const spy2 = jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    
    const cartId = dataStore.createCart()
    
    const expected = mockTime.toString(36) + mockRandom.toString(36)
    expect(cartId).toBe(expected)
    
    const cart = dataStore.getCart(cartId)

    expect(cart.cartId).toBe(expected)
    
  })

  
  it("should create a new cart if cartId is not given", () => {
    const cartId = dataStore.createCart()
    
    const cart = dataStore.getCart()

    expect(cart.cartId).not.toBe(cartId)
  })
  
  it("updated cart items shoud persist", () => {
    const cart = dataStore.getCart()

    expect(cart.items).toHaveLength(0)

    cart.items.push({
      product:  {
        productId: "test-product-id-1",
        title: "Test Title 1",
        description: "Test Description 1"
      },
      costPerItem: 100,
      quantity: 1
    })
    
    dataStore.updateCart(cart)

    const cart2 = dataStore.getCart(cart.cartId)

    expect(cart2.cartId).toBe(cart.cartId)
    expect(cart2.items).toHaveLength(1)
    expect(cart2.items[0].product.productId).toBe(cart.items[0].product.productId)
  })
  
  it("cart should be deleted", () => {
      let cart = dataStore.getCart()
      dataStore.lockCart(cart.cartId)
      cart = dataStore.getCart(cart.cartId)
      expect(cart.isLocked).toBe(true)
  })
});
