import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { AdminOrchestratedService } from './admin-orchestrated.service';

@Module({
  controllers: [AdminController],
  providers: [AdminService, CouponsDataStore, AdminOrchestratedService]
})
export class AdminModule {}
