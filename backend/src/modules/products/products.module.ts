import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsDataStore } from 'src/datastore/products/products.datastore';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductsDataStore],
  exports: [ProductsService, ProductsDataStore]
})
export class ProductsModule {}
