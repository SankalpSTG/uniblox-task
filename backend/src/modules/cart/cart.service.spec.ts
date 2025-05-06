import { CartDataStore } from '@/datastore/cart/cart.datastore';
import { CartService } from './cart.service';
import { CartItemTypeWithoutQuantity } from './types';

describe('CartService', () => {
  let cartService: CartService
  let dataStore: CartDataStore

  beforeEach(async () => {
    dataStore = new CartDataStore()
    cartService = new CartService(dataStore)
  });
  afterEach(async () => {
    jest.restoreAllMocks()
  })

  it("should create a cart and add item to it", () => {
    const mockTime = 1715000000000; // arbitrary fixed timestamp
    const mockRandom = Math.round(0.5 * 1000)
    jest.spyOn(Date.prototype, 'getTime').mockReturnValue(mockTime);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    
    let testProduct: CartItemTypeWithoutQuantity = {
      productId: "test-product-id",
      costPerItem: 100
    }
    const cartId = cartService.addItemToCart(testProduct)
    
    const expected = mockTime.toString(36) + mockRandom.toString(36)
    expect(cartId).toBe(expected)
    
    const cart = cartService.getCart(cartId)

    expect(cart.items[0].productId).toBe(testProduct.productId)
  })

  it("should add more items to existing cart", () => {
    const cartId = cartService.addItemToCart({
      productId: "test-product-id",
      costPerItem: 100
    })
    cartService.addItemToCart({
      productId: "test-product-id-2",
      costPerItem: 100
    }, cartId)

    const cart = cartService.getCart(cartId)

    expect(cart.items.length).toBe(2)
  })

  it("should change quantity of existing item in cart", () => {
    const cartId = cartService.addItemToCart({
      productId: "test-product-id",
      costPerItem: 100
    })
    cartService.addItemToCart({
      productId: "test-product-id",
      costPerItem: 100
    }, cartId)

    const cart = cartService.getCart(cartId)

    expect(cart.items.length).toBe(1)
    expect(cart.items[0].quantity).toBe(2)
  })
});
