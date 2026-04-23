import React, { useEffect, useState } from "react";
import "../styles/orderHistory.css";

export default function OrderHistory() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));

    if (!user) return;

    const orderKey = `orders_${user.email}`;

    const userOrders = JSON.parse(localStorage.getItem(orderKey)) || [];

    setOrders(userOrders);
  }, []);

  return (
    <div className="history-container">

      <h2>My Orders</h2>

      {
        orders.length === 0 ? (
          <p className="empty">No orders yet</p>
        ) : (
          orders.map(order => (
            <div className="order-box" key={order.id}>

              <div className="order-header">
                <span>Order ID: {order.id}</span>
                <span>{order.date}</span>
              </div>

              {
                order.items.map(item => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt="" />

                    <div>
                      <h4>{item.name}</h4>
                      <p>Qty: {item.qty}</p>
                    </div>

                    <div>
                      ₹{item.price * item.qty}
                    </div>
                  </div>
                ))
              }

              <div className="order-total">
                Total: ₹{order.total}
              </div>

            </div>
          ))
        )
      }

    </div>
  );
}