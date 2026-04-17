import React, { useContext } from "react";
import { CartContext } from "../context/CartContextProvider";
import "../styles/orders.css";

export default function Orders() {
  const { cart, totalPrice } = useContext(CartContext);

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

      <button className="confirm-btn">Confirm Order</button>
    </div>
  );
}