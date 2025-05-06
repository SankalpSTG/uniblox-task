import { ProductsDataStore } from "./products.datastore";

describe('ProductsDataStore', () => {
  let dataStore: ProductsDataStore;

  beforeEach(async () => {
    dataStore = new ProductsDataStore();
  });
  afterEach(async () => {
    jest.restoreAllMocks();
  });

  it('should return 1 or more than 1 products', () => {
    const products = dataStore.getProducts()
    expect(products.length).toBeGreaterThan(0)
  });
});
