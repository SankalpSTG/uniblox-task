import { AnalyticsDataStore } from "./analytics.datastore";

describe('AnalyticsDataStore', () => {
  let dataStore: AnalyticsDataStore

  beforeEach(async () => {
    dataStore = new AnalyticsDataStore()
  });
  afterEach(async () => {
    jest.restoreAllMocks()
  })

  it("should update metrics", () => {
    dataStore.incrementOrderCount()
    dataStore.updateCouponUsage("test-coupon")
    dataStore.updateProductPurchaseCount([{
      product: {
        productId: "test-product-id-1",
        title: "Test Title 1",
        description: "Test Description 1"
      },
      costPerItem: 100,
      quantity: 2
    },{
      product: {
        productId: "test-product-id-2",
        title: "Test Title 2",
        description: "Test Description 2"
      },
      costPerItem: 50,
      quantity: 3
    }])
    dataStore.updateTotalDiscount(100)
    dataStore.updateTotalPurchaseAmount(500)

    let current = dataStore.getAllMetrics()

    expect(current.numberOfOrders).toBe(1)
    expect(current.purchaseCountPerProduct.size).toBe(2)
    expect(current.totalProductsPurchased).toBe(5)
    expect(current.usedCoupons.length).toBe(1)
    expect(current.usedCoupons[0]).toBe("test-coupon")
    expect(current.totalDiscountAmount).toBe(100)
    expect(current.totalPurchaseAmount).toBe(500)
  })
});
