import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AnalyticsService } from './analytics.service';
import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { AdminOrchestratedService } from './admin-orchestrated.service';
import { AnalyticsDataStore } from '@/datastore/analytics/analytics.datastore';
import { CouponsService } from './coupons.service';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [AdminController],
  providers: [AnalyticsService, CouponsDataStore, AdminOrchestratedService, AnalyticsDataStore, CouponsService, ConfigService],
  exports: [AnalyticsService, CouponsDataStore, AnalyticsDataStore, CouponsService]
})
export class AdminModule {}
