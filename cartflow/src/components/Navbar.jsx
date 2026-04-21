import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/navbar.css'
import { ProductContext } from '../context/ProductContextProvider'
import { CartContext } from '../context/CartContextProvider'

export default function Navbar() {

    const { setSearch, setFilter, setCategory } = useContext(ProductContext)
    const { totalItems } = useContext(CartContext)
    
    const navigate = useNavigate()

    const user =  JSON.parse(localStorage.getItem("currentUser"))

    // 🔥 logout function
    function handleLogout() {
        localStorage.removeItem("currentUser")
        navigate("/login")
    }

    return (
        <>

            <div className='navbar'>


                <div className="nav-left" >
                    <Link to='/' onClick={() => setCategory("all")} style={{ color: "#e08181", textDecoration: "none" }}><h2>ShopX</h2></Link>

                </div>


                <div className="nav-center">
                    <span className="search-icon">🔍</span>
                    <input type="text" placeholder="Search for products, brands and more..." onChange={(e) => setSearch(e.target.value)} />
                </div>


                <div className="nav-right">
                    {user?.role === "admin" && (
                        <>
                        <Link to="/addprod" className="icon">+ Add Product</Link>
                        <Link to="/userinfo" className="icon">👨🏻‍💼User Informations</Link>

                        </>
                    )}

                    {
                        user?.role == "user" && (
                            <>
                                <Link to="/cart" className="icon">🛒Cart ({totalItems})</Link>
                                <Link to="/orders" className="icon">📦Orders</Link>
                            </>

                        )
                    }


                    {
                        user ? (
                            <button className='signin-btn' onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className='signin-btn'>Login</button>
                            </Link>
                        )
                    }
                </div>

            </div>


            <div className="sub-navbar">

                <div className="left-links">
                    <Link to="/" onClick={() => setCategory("all")}>Home</Link>
                    <Link to="/mens" onClick={() => setCategory("mens")}>Mens</Link>
                    <Link to="/womens" onClick={() => setCategory("womens")}>Womens</Link>
                    <Link to="/kids" onClick={() => setCategory("kids")}>Kids</Link>
                    <Link to="/electronics" onClick={() => setCategory("electronics")}>Electronics</Link>
                </div>

                <div className="right-links">
                    <select onChange={(e) => setFilter(e.target.value)}>
                        <option value="">Filter</option>
                        <option value="low">Price: Low to High</option>
                        <option value="high">Price: High to Low</option>
                        <option value="rating">Rating</option>

                    </select>
                </div>

            </div>
        </>
    )
}