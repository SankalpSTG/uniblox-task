# uniblox-task
This Repository is for a Task given by Uniblox for Interviews

Postman collection is available in the backend folder.

## How To Test

Please copy the ```.env.example``` file to ```.env``` file.

Please import the postman collection from the backend to your postman.

All the variables are directly set using pre/post run scripts and hence you will not need to set variables manually unless for some unknown edge case.

Run APIs in following order
1. **Add Item To Cart**: Since we are not passing cartId, this will create a new cart and return the cart. You can use any of the following product ids:
    1. product-a
    2. product-b
    3. product-c
    4. product-d
    5. product-e
2. **Add Item To Cart Id**: This will add more items to existing cart. In case the cartId is incorret, this will throw an error. You can pass the above productIds here as well.
3. **Get Unused Coupon**: As described in the ```.env``` file, if your order is the ```Nth``` order, you should be able to get a coupon. Or else this API will through an error. 
4. **Checkout**: Checkout API can be run before **Get Unused Coupon** as discountCode is optional. This will return you the complete order details.
5. **Get Metrics**: This API will return metrics as follows
    1. Number of Orders
    2. Total Purchase Amount
    3. Purchase Count Per Product ID
    4. Total Products Purchased
    5. Used Coupons
    6. Total Discount Amount


### Unit Testing

Simply run ```npm run test``` to test all the unit tests written. 

## Summary

There are 4 APIs
1. Add To Cart -> Adds Products to the Cart
2. Checkout -> Places an Order against the Cart
3. Get Coupon -> Generates a Coupon
4. Get Metrics -> Provides Order Metrics

## Backend

The backend has 4 Modules
1. Admin
2. Cart
3. Orders
4. Products

Out of these, the Product does not have any contracts exposed.

Each of the module has a controller, and multiple services.

In all the cases where one service is dependent on one or more other services, we have created orchestrated services which do not contain domain logic but they talk to multiple services. This helps us follow Single Responsibility Principle.

Along with this, there are 5 Data Stores
1. Products
2. Coupons
3. Orders
4. Cart
5. Analytics

We are keeping them separate to mimic mongodb like collections, isolate them and maintain proper separation of concerns.

The codebase is small so each datastore is currently able to talk with maximum one service and if we wish to talk to a datastore, we import the service. This further helps with isolation.

Since the codebase is a modular MVC, the idea here is I can separate modules into microservices. However in case if we wish to keep it as a monolith for any reason, I have kept datastores separately so sharing datastores won't be a problem.

## APIs

### Add To Cart API

Request Body:
```
cartId: string
productId: string, required
```

Incase the ```cartId``` is not given given, we will create a cart on the fly and add the product to it.

Since authentication is beyond the scope of assignment, I have created a multi-cart system where multiple carts can be created to simulate multiple users adding to different carts.

To add products to existing cart, ```cartId``` must be provided with this API.

### Checkout API

Request Body
```
cartId: string, required
discountCode: string
```

The Checkout API creates an order based on the cartId. In case the cart doesnt exist, the API will throw ```NotFoundException```.

To apply discount, you need to pass a valid ```discountCode```. This code will be verified in the checkout process and the discount will be applied. If the discount code is invalid, the API will throw an error.

### Get Coupon API

This API creates a new Discount Coupon which can be used to avail 10% discount to the order. 

This API provides discount only for Nth orders. The N can be configured through the ```.env``` file.

### Get Metrics API

This API returns metrics as follows
```
numberOfOrders -> total orders
totalPurchaseAmount -> total amount after discount
purchaseCountPerProduct:
  productId: count
totalProductsPurchased -> total quantity of products purchased
usedCoupons -> list of couponIds
totalDiscountAmount -> total discount applied across orders
```

## Frontend

Under Construction