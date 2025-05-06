import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './modules/cart/cart.module';
import { OrdersModule } from './modules/orders/orders.module';
import { AdminModule } from './modules/admin/admin.module';
import { OrdersController } from './modules/orders/orders.controller';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [CartModule, OrdersModule, AdminModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
