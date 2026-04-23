import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Addproduct from "./components/Addproduct"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Orders from "./components/Orders"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer"
import Login from "./components/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import Register from "./components/Register"
import Updateproduct from "./components/Updateproduct"
import Userinfo from "./components/Userinfo"
import UpdateProduct from "./components/Updateproduct"
import OrderHistory from "./components/OrderHistory"


export default function App() {

  return (
    <>
      <Navbar/>
      
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
       <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />

        {/* 🔒 PROTECTED */}
        <Route element={<ProtectedRoute />}>

          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/history" element={<OrderHistory />} />
          <Route path="/addprod" element={<Addproduct />} />

        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      <Route path="/updateprod/:id/:category" element={<UpdateProduct />} />
      <Route path='/userinfo' element={<Userinfo/>}/>

      </Routes>
      <Footer/>
    </>
  )
}