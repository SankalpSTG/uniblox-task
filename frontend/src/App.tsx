import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import ProductsLayout from "./layouts/ProductsLayout";
import CartLayout from "./layouts/Cart.Layout";
import AdminLayout from "./layouts/AdminLayout";
import HomeLayout from "./layouts/HomeLayout";
import { Toaster } from "react-hot-toast";
import OrderLayout from "./layouts/OrderLayout";
function App() {
  return (
    <Provider store={store}>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            Component: HomeLayout,
            children: [
              { index: true, Component: ProductsLayout },
              { path: "cart", Component: CartLayout },
              { path: "admin", Component: AdminLayout },
              { path: "order", Component: OrderLayout },
            ],
          },
        ])}
      />
      <Toaster/>
    </Provider>
  );
}

export default App;
