import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Home from './Pages/home/Home'
import Order from './Pages/order/Order'
import Cart from './Pages/cart/Cart'
import Dashboard from './Pages/admin/dashboard/Dashboard'
import NoPage from './Pages/nonpage/NonPage'
import MyState from './Context/data/MyState';
import Login from './Pages/registration/Login';
import Signup from './Pages/registration/Signup';
import ProductInfo from './Pages/productInfo/ProductInfo';
import AddProduct from './Pages/admin/pages/AddProduct';
import Allproducts from './Pages/allproduct/Allproducts';
import UpdateProduct from './Pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router';
import Profile from './Components/Profile/Profile';


export default function App() {
  return (
    <div>
      <MyState>
      <BrowserRouter>
      
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/order' element={
        <ProtectedRoutes>
        <Order/>
        </ProtectedRoutes>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/dashboard" element={
       <ProtectedRoutesForAdmin>
        <Dashboard/>
       </ProtectedRoutesForAdmin>
        } />
        <Route path="/*" element={<NoPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/allproducts" element={<Allproducts/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/productinfo/:id'element={<ProductInfo/>}/>
        <Route path='/addproduct' element={
        <ProtectedRoutesForAdmin>
        <AddProduct/>
       </ProtectedRoutesForAdmin>
        }/>
        <Route path='/updateproduct' element={
          <ProtectedRoutesForAdmin>
        <UpdateProduct/>
       </ProtectedRoutesForAdmin>
        }/>



      </Routes>
      <ToastContainer/>
      </BrowserRouter>
      </MyState>
    </div>
  )
}

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
} 

export const ProtectedRoutesForAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem('user'));
  if(admin.user.email==='tanish@gmail.com'){
    return children;
  }
  else{
    return <Navigate to='/login'/>
  }
}




   
