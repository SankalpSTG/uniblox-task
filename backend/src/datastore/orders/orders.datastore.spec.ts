import { OrdersDataStore } from './orders.datastore';
import { OrderStatusEnum } from './types';

describe('OrdersDataStore', () => {
  let dataStore: OrdersDataStore;

  beforeEach(async () => {
    dataStore = new OrdersDataStore();
  });
  afterEach(async () => {
    jest.restoreAllMocks();
  });

  it('should create order', () => {
    const order = dataStore.createOrder({
      items: [
        {
          product: {
            productId: "test-product-id-1",
            title: "Test Title 1",
            description: "Test Description 1"
          },
          costPerItem: 100,
          quantity: 1,
        },
      ],
      baseAmount: 100,
      discountCoupon: 'test-coupon',
      finalAmount: 90,
      createdAt: new Date(),
      status: OrderStatusEnum.Processing,
    });
    expect(order.orderId.length).toBeGreaterThan(0)
  });
});
