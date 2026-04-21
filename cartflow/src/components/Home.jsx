import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContextProvider'
import { CartContext } from '../context/CartContextProvider'
import '../styles/home.css'
import { toast } from "react-toastify";
import Carosule from './Carosule';
import { Link } from 'react-router-dom';

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


  const user = JSON.parse(localStorage.getItem("currentUser"))


  async function handleDelete(id, category) {
  try {
    await fetch(`http://localhost:3000/${category}/${id}`, {
      method: "DELETE"
    })

    // 🔥 refresh UI (important)
    window.location.reload()

  } catch (err) {
    console.log(err)
  }
}


  return (
    <>

      <Carosule />
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

                {
                  user?.role === "admin" && (
                    <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                      <Link
                        to={`/updateprod/${p.id}/${p.category}`}
                        className="btn" style={{ textDecoration: "none", textAlign: "center" }}
                      >
                        Update Product
                      </Link>
                      <button
                        className="btn"
                        onClick={() => handleDelete(p.id, p.category)}
                      >
                        Delete Product
                      </button>
                    </div>

                  )
                }
                {
                  user?.role === 'user' && (
                    <button className="btn" onClick={() => handleAdd(p)}>
                      Add to Cart
                    </button>
                  )
                }

              </div>

            </div>
          ))
        }

      </div>
    </>
  )
}