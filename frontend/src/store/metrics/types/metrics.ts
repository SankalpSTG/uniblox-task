export type MetricsType = {
  numberOfOrders: number;
  totalPurchaseAmount: number;
  purchaseCountPerProduct: any;
  totalProductsPurchased: number;
  usedCoupons: string[];
  totalDiscountAmount: number;
};

export type GetMetricsResponseType = MetricsType;

export type MetricsState = {
  data: MetricsType | null;
  isLoading: boolean;
  error: string;
};
