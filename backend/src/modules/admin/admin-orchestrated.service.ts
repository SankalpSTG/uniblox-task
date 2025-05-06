import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { Injectable } from '@nestjs/common';
import { AdminService } from './admin.service';

@Injectable()
export class AdminOrchestratedService {
  constructor(
    private readonly adminService: AdminService
  ){}
  getCoupon(){
    return this.adminService.getCoupon()
  }
}
