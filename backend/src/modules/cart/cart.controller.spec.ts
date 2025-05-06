import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartDataStore } from '@/datastore/cart/cart.datastore';
import { CartOrchestratedService } from './cart-orchestrated.service';
import { ProductsService } from '../products/products.service';
import { ProductsDataStore } from '@/datastore/products/products.datastore';

describe('CartController', () => {
  let controller: CartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        CartService,
        CartDataStore,
        CartOrchestratedService,
        ProductsService,
        ProductsDataStore,
      ],
    }).compile();
    controller = module.get<CartController>(CartController);
  });

  it('cart ids should not be equal', async () => {
    let cart = await controller.AddItemToCart({
      productId: "product-a"
    })
    let cart2 = await controller.AddItemToCart({
      productId: "product-b"
    })
    expect(cart.data).toBeDefined()
    expect(cart2.data).toBeDefined()
    expect(cart.data?.cartId).not.toBe(cart2.data?.cartId)
  });

  it('same product should not have multiple entries', async () => {
    let cart = await controller.AddItemToCart({
      productId: "product-a"
    })
    expect(cart.data).toBeDefined()
    cart = await controller.AddItemToCart({
      cartId: cart.data!.cartId,
      productId: "product-a"
    })
    expect(cart.data?.items.length!).toBe(1)
    expect(cart.data?.items[0].quantity).toBe(2)
  });

  it('should return cart', async () => {
    let cart = await controller.AddItemToCart({
      productId: "product-a"
    })
    expect(cart.data).toBeDefined()
    cart = await controller.GetCart(cart.data?.cartId!)
    expect(cart.data).toBeDefined()
  });
});
