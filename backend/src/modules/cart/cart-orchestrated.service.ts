import { Injectable, NotFoundException } from '@nestjs/common';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { ProductsService } from '../products/products.service';
import { CartService } from './cart.service';
import { NotFoundError } from 'rxjs';
import { CartType } from '@/datastore/cart/types';

@Injectable()
export class CartOrchestratedService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly cartService: CartService,
  ) {}
  addItemToCart(item: AddToCartDto): CartType {
    const product = this.productsService.getProduct(item.productId);
    if (!product) throw new NotFoundException('Product Not Found');
    return this.cartService.addItemToCart({
      productId: product.productId,
      costPerItem: product.costPerItem
    }, item.cartId)
  }
  getCart(cartId: string): CartType{
    return this.cartService.getCart(cartId)
  }
}
