import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Addproduct from "./components/Addproduct"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Orders from "./components/Orders"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function App() {
  return (
    <>
      <Navbar />
      
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
        {/* 🔥 ONE DYNAMIC ROUTE */}
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Home />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/addprod" element={<Addproduct />} />
        <Route path="/orders" element={<Orders />} />

      </Routes>
    </>
  )
}