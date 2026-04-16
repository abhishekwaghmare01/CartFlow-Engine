import {  Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import { useState } from "react"
import Addproduct from "./components/Addproduct"


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
        <Route path="/addprod" element={<Addproduct/>}/>
        <Route path="/orders" element={<h1>Orders</h1>} />
      </Routes>
    </>
  )
}