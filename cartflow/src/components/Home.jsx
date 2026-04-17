import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import { CartContext } from '../context/CartContextProvider'
import '../styles/home.css'
import { toast } from "react-toastify";
import Carosule from './Carosule';

export default function Home() {

  const { products } = useContext(ProductContext)
  const { addToCart } = useContext(CartContext)

   const handleAdd = (product) => {
    addToCart(product);

    toast.success(`${product.name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 1200,
    });
  };

  return (
    <>
  
    <Carosule/>
    <div className="products-container">

      {
        products.map(p => (
          <div className="card" key={p.id}>

            <div className="img-box">
              <img src={p.image} alt={p.name} />
            </div>

            <div className="card-body">
              <h3 className="title">{p.name}</h3>
              <p className="desc">{p.description}</p>
              <p className="desc"> Category : {p.category}</p>

              <div className="price-rating">
                <span className="price">₹{p.price}</span>
                <span className="rating">⭐ {p.rating}</span>
              </div>

              <button className="btn" onClick={() => handleAdd(p)}>
                Add to Cart
              </button>
            </div>

          </div>
        ))
      }

    </div>
      </>
  )
}