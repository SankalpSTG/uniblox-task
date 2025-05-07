import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import ProductsLayout from './layouts/ProductsLayout'
import CartLayout from './layouts/Cart.Layout'
import AdminLayout from './layouts/AdminLayout'

function App() {
  return <Provider store={store}>
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <ProductsLayout/>
      },{
        path: "/cart",
        element: <CartLayout/>
      },{
        path: "/admin",
        element: <AdminLayout/>
      }
    ])}/>
  </Provider>
}

export default App
