import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsDataStore } from 'src/datastore/products/products.datastore';

@Module({
  imports: [ProductsDataStore],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
