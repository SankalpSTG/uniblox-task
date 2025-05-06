import { Controller, Get } from '@nestjs/common';

@Controller('admin')
export class AdminController {
  @Get("/discount-coupon")
  async getDiscountCoupon(){

  }
  @Get("/metrics")
  async getMetrics(){
    
  }
}
