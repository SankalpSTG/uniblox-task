import { CouponsDataStore } from "./coupons.datastore";

describe('CouponsDataStore', () => {
  let dataStore: CouponsDataStore

  beforeEach(async () => {
    dataStore = new CouponsDataStore()
  });
  afterEach(async () => {
    jest.restoreAllMocks()
  })

  it("should create and validate coupon", () => {
    let previous = dataStore.getCoupon()
    let newCoupon = dataStore.getCoupon()

    expect(previous).toBe(newCoupon)

    let canUse = dataStore.canUseCoupon(newCoupon)
    
    expect(canUse).toBe(true)

    dataStore.invalidateCoupon(newCoupon)

    canUse = dataStore.canUseCoupon(newCoupon)

    expect(canUse).toBe(false)
  })
});
