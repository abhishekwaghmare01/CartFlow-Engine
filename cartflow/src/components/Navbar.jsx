import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar() {
    return (
        <>

            <div className='navbar'>


                <div className="nav-left">
                    <h2>ShopX</h2>
                </div>


                <div className="nav-center">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search for products, brands and more..." />
                </div>


                <div className="nav-right">
                    <Link to="/addprod" className="icon">+ <span>Add Products</span></Link>

                    <Link to="/cart" className="icon">🛒 <span>Cart</span></Link>
                    <Link to="/orders" className="icon">📦 <span>Orders</span></Link>
                    <button className="signin-btn">Login</button>
                </div>

            </div>


            <div className="sub-navbar">

                <div className="left-links">
                    <Link to="/">Home</Link>
                    <Link to="/mens">Mens</Link>
                    <Link to="/womens">Womens</Link>
                    <Link to="/kids">Kids</Link>
                    <Link to="/electronics">Electronics</Link>
                </div>

                <div className="right-links">
                    <select onChange={(e) => handleFilter(e.target.value)}>
                        <option value="">Filter</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                        <option value="brand">Brand</option>
                    </select>
                </div>

            </div>
        </>
    )
}