import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import "../styles/orders.css";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Orders() {
  const { cart, totalPrice,clearCart} = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem('currentUser'))

  function handleComfirmOrder() {

    if (!user) return

    const orderKey = `orders_${user.email}`

    let oldOrders = JSON.parse(localStorage.getItem(orderKey)) || []

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString()
    }

    oldOrders.push(newOrder)

    localStorage.setItem(orderKey, JSON.stringify(oldOrders))

    // 🔥 CLEAR CART AFTER ORDER
    clearCart()

    toast.success("Order Confirmed 🎉")
  }

  return (
    <div className="orders-container">
      <h2 className="orders-title">Order Summary</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>
          No items in cart
        </p>
      ) : (
        cart.map((item) => (
          <div className="order-item" key={item.id}>
            <span>
              {item.name} (x{item.qty})
            </span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))
      )}

      <hr className="orders-divider" />

      <div className="total-amount">
        Total Amount: ₹{totalPrice}
      </div>
      <Link to='/home'>
        <button className="confirm-btn" onClick={handleComfirmOrder}>Confirm Order</button>

      </Link>
    </div>
  );
}