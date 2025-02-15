import logo from './logo.svg';
import './App.css';
import { Button, ThemeProvider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navbar from './customer/component/Navbar/Navbar.tsx';
import customeTheme from './Theme/customTheme.ts';
import Home from './pages/Home/Home.tsx';
import Deal from './pages/Home/Deal/Deal.tsx';
import Product from './pages/Product/Product.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import ProductDetails from "./pages/PageDetails/ProductDetails.tsx"
import Review from './pages/Review/Review.tsx';
import Cart from './pages/Cart/Cart.tsx';
import Checkout from './pages/Checkout/Checkout.tsx';
import Account from './pages/Account/Account.tsx';
import BecomeSeller from './pages/BecomeSeller/BecomeSeller.tsx';
import SellerDashboard from './seller/pages/sellerdashboard/SellerDashboard.tsx';
import AdminDashboard from './admin/pages/Dashboard/AdminDashboard.tsx';

export default function App() {
  return (
    <div>

      <ThemeProvider theme={customeTheme}>

        <div>
          <Navbar />
          {/* <Home/>
          <Product/> */}
          {/* <ProductDetails/> */}
          {/* <Review/> */}
          {/* <Cart/> */}
          {/* <Checkout/> */}
          {/* <Account/> */}
          {/* <BecomeSeller/> */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/products/:category' element={<Product/>}/>
            <Route path='/reviews/:productId' element={<Review/>}/>
            <Route path='/product-details/:categoryId/:name/:productId' element={<ProductDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/account/*' element={<Account/>}/>
            <Route path='/become-seller' element={<BecomeSeller/>}/>
            <Route path='/seller/*' element={<SellerDashboard/>}/>
            <Route path='/admin/*' element={<AdminDashboard/>}/>



           



          </Routes>
        </div>

      </ThemeProvider>



    </div>


  )
}
