import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextProvider'
import { Link } from 'react-router-dom'
import '../styles/cart.css'
import { toast } from "react-toastify";

export default function Cart() {

  const { cart, removeFromCart, updateQty, totalPrice } = useContext(CartContext)

  const handlePlaceOrder = () => {
  if (cart.length === 0) return;

  toast.success("Order placed successfully 🎉", {
    position: "top-right",
    autoClose: 1500,
  });
};

const handleRemove = (id) => {
  removeFromCart(id);

  toast.error("Item removed from cart ❌", {
    position: "top-right",
    autoClose: 1200,
  });
};


  return (
    <div className="cart-container">

      <h2>Your Cart</h2>

      {
        cart.length === 0 ? (
          <h3>Cart is empty</h3>
        ) : (
          cart.map(item => (
            <div className="cart-item" key={item.id}>

              <img src={item.image} alt="" />

              <div className="details">
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
                <p>⭐ {item.rating}</p>
              </div>

              <div className="qty">
                <button onClick={() => updateQty(item.id, "dec")} >-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, "inc")}>+</button>
              </div>

              <button
                className="remove"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>

            </div>
          ))
        )
      }

      <h2>Total: ₹{totalPrice}</h2>

      {
        cart.length > 0 && (
          <Link to="/orders">
            <button className="order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </Link>
        )
      }

    </div>
  )
}