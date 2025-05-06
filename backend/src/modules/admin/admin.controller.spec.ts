import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AnalyticsService } from './analytics.service';
import { CouponsDataStore } from '@/datastore/coupons/coupons.datastore';
import { AdminOrchestratedService } from './admin-orchestrated.service';
import { AnalyticsDataStore } from '@/datastore/analytics/analytics.datastore';
import { CouponsService } from './coupons.service';
import { ConfigModule } from '@nestjs/config';
import { BadRequestException } from '@nestjs/common';

describe('AdminController', () => {
  let controller: AdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({isGlobal: true})],
      controllers: [AdminController],
      providers: [
        AnalyticsService,
        CouponsDataStore,
        AdminOrchestratedService,
        AnalyticsDataStore,
        CouponsService,
      ],
    }).compile();

    controller = module.get<AdminController>(AdminController);
  });

  it('should be defined', async () => {
    const metrics = await controller.getMetrics()
    expect(typeof metrics.data).toBeDefined()
  });

  it('should be defined', async () => {
    try{
      const data = await controller.getDiscountCoupon()
      expect(data.data?.length).toBeGreaterThan(0)
    }catch(error){
      expect(error).toBeInstanceOf(BadRequestException)
    }
  });
});
