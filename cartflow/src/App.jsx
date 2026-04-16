import {  Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/mens" element={<h1>Mens</h1>} />
        <Route path="/womens" element={<h1>Womens</h1>} />
        <Route path="/kids" element={<h1>Kids</h1>} />
        <Route path="/electronics" element={<h1>Electronics</h1>} />
        <Route path="/cart" element={<h1>Cart</h1>} />
        <Route path="/addprod" element={<h1>Add Product</h1>}/>
        <Route path="/orders" element={<h1>Orders</h1>} />
      </Routes>
    </>
  )
}