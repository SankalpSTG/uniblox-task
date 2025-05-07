import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Responses } from '@/misc/response';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}
  @Get("/")
  getProducts(){
    return Responses.SuccessData(this.productsService.getProducts())
  }
}