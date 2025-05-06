import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { CartDataStore } from 'src/datastore/cart/cart.datastore';
import { CartOrchestratedService } from './cart-orchestrated.service';
import { ProductsService } from '../products/products.service';
import { ProductsDataStore } from 'src/datastore/products/products.datastore';

@Module({
  controllers: [CartController],
  providers: [CartService, CartDataStore, CartOrchestratedService, ProductsService, ProductsDataStore]
})
export class CartModule {}
