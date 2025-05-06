import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { Controller, Get } from '@nestjs/common';
import { AdminOrchestratedService } from './admin-orchestrated.service';
import { Responses } from '@/misc/response';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminOrchestratedService: AdminOrchestratedService
  ){}
  @Get("/discount-coupon")
  async getDiscountCoupon(){
    return Responses.SuccessData(this.adminOrchestratedService.getCoupon())
  }
  @Get("/metrics")
  async getMetrics(){
    return Responses.SuccessData(this.adminOrchestratedService.getMetrics())
  }
}
