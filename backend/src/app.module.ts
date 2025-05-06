import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AdminModule } from './modules/admin/admin.module';
import { OrdersorchestratedController } from './modules/ordersorchestrated/ordersorchestrated.controller';

@Module({
  imports: [CartModule, OrdersModule, AdminModule],
  controllers: [AppController, OrdersorchestratedController],
  providers: [AppService],
})
export class AppModule {}
