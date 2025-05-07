import { Link, useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { checkout } from "../../store/checkout/checkout.logic";
import { cartActions } from "../../store/cart/cart.state";

const CartContainer = () => {
  const cartState = useAppSelector((store) => store.cart);
  const checkoutState = useAppSelector((store) => store.checkout);
  const dispatch = useAppDispatch()
  const naviagte = useNavigate()
  const totalAmount = useMemo(() => {
    let totalAmount = 0;
    if (cartState.data) {
      for (let i = 0; i < cartState.data.items.length; i++) {
        totalAmount += cartState.data.items[i].quantity * cartState.data.items[i].costPerItem;
      }
    }
    return totalAmount;
  }, [cartState.data]);
  const onCheckout = () => {
    if (!cartState.data) return toast("Something went wrong!");
    dispatch(checkout({
      cartId: cartState.data.cartId
    }))
  };
  useEffect(() => {
    if(!checkoutState.isLoading && checkoutState.data){
      dispatch(cartActions.reset())
      naviagte("/order")
    }
  }, [checkoutState.isLoading])
  return (
    <div className="p-4 w-full h-full flex items-center justify-center">
      <div className="w-[480px] rounded-md p-4 max-w-full shadow-[0px_0px_3px_rgba(0,0,0,0.1)]">
        <div className="text-2xl">Cart</div>
        <hr className="border-[#EFEFEF]" />
        {cartState.data ? (
          <div>
            <div className="grid grid-cols-5">
              <div className="col-span-2">Product</div>
              <div>Quantity</div>
              <div>Rate</div>
              <div className="text-right">Amount</div>
            </div>
            {cartState.data.items.map((item) => (
              <div className="grid grid-cols-5">
                <div className="col-span-2">{item.product.title}</div>
                <div>{item.quantity}</div>
                <div>{item.costPerItem}</div>
                <div className="text-right">{item.costPerItem * item.quantity}</div>
              </div>
            ))}
            <hr className="border-[#EFEFEF]" />
            <div className="flex items-center justify-between py-2">
              <div>Total</div>
              <div>Rs. {totalAmount}</div>
            </div>
            <div className="flex items-center justify-between py-2">
              <input placeholder="Enter Coupon Code" className="w-full border border-[#EFEFEF] rounded-md py-2 px-4" />
            </div>
            <div onClick={() => onCheckout()} className="text-center p-2 bg-yellow-500 hover:bg-yellow-600 cursor-pointer py-2">Checkout</div>
          </div>
        ) : (
          <div>
            There are no items in your cart. Please go to{" "}
            <Link to={"/"} className="text-blue-500">
              products
            </Link>{" "}
            page to add items in to your cart.
          </div>
        )}
      </div>
    </div>
  );
};

export default CartContainer;
