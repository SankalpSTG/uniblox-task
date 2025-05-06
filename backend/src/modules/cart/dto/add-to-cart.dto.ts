import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AddToCartDto {
  @IsNotEmpty()
  @IsString()
  productId: string

  @IsString()
  @IsOptional()
  cartId?: string
}