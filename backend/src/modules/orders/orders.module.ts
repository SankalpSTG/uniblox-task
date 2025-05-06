import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OrdersDataStore } from '@/datastore/orders/orders.datastore';
import { OrdersOrchestratedService } from './orders-orchestrated.service';
import { CartService } from '../cart/cart.service';
import { CartDataStore } from '@/datastore/cart/cart.datastore';
import { CartModule } from '../cart/cart.module';

@Module({
  imports: [CartModule],
  controllers: [OrdersController],
  providers: [OrdersService, OrdersDataStore, OrdersOrchestratedService]
})
export class OrdersModule {}
