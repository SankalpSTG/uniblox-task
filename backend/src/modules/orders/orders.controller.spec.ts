import { Test, TestingModule } from '@nestjs/testing';
import { OrdersController } from './orders.controller';
import { CartController } from '../cart/cart.controller';
import { CartService } from '../cart/cart.service';
import { CartDataStore } from '@/datastore/cart/cart.datastore';
import { CartOrchestratedService } from '../cart/cart-orchestrated.service';
import { ProductsService } from '../products/products.service';
import { ProductsDataStore } from '@/datastore/products/products.datastore';
import { CartModule } from '../cart/cart.module';
import { AdminModule } from '../admin/admin.module';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { OrdersOrchestratedService } from './orders-orchestrated.service';
import { OrdersService } from './orders.service';
import { OrdersDataStore } from '@/datastore/orders/orders.datastore';

describe('OrdersController', () => {
  let controller: OrdersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CartModule, AdminModule],
      controllers: [OrdersController],
        providers: [OrdersService, OrdersDataStore, OrdersOrchestratedService]
    }).compile();

    controller = module.get<OrdersController>(OrdersController);
  });

  it('should thrown error in case of invalid cart', async () => {
    try{
      await controller.checkout({
        cartId: "test-cart-id"
      })
    }catch(error){
      expect(error).toBeInstanceOf(NotFoundException)
    }
  });
});
