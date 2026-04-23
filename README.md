# 🛒 ShopX E-Commerce React WebApp

A fully functional e-commerce application built with React using Context API for scalable state management. This project simulates real-world shopping workflows including product browsing, cart management, authentication, and order processing.

---

## 🚀 Demo

*Add your live link here (GitHub Pages / Vercel / Netlify)*
*Add GIF or screenshots below*

---

## ✨ Features

* Product listing with categories & filters
* Search functionality
* Add to Cart / Remove / Update quantity
* Persistent cart (localStorage)
* Authentication (Login/Logout)
* Role-based UI (Admin/User)
* Order placement & tracking
* Global UI state (theme, loader, notifications)

---

## 🧠 Functional Architecture

### 1️⃣ Product Flow

* Products are fetched (API/static)
* Stored in **Product Context**

**Handles:**

* Product list
* Categories
* Filters (price, rating, brand)
* Search

Accessible across all components without prop drilling.

---

### 2️⃣ Cart Flow (Core Logic)

When user clicks **Add to Cart**:

* If item exists → increase quantity
* Else → add new item

**Cart Context Handles:**

* Add / Remove items
* Update quantity
* Total items & total price
* Persistent storage (localStorage)

**Behavior:**

* Cart persists after refresh
* Quantity ≥ 1
* Price auto-updates

---

### 3️⃣ Authentication Flow

**User Context Handles:**

* Login / Logout
* Store user data (name, email, role)
* Token logic (extendable)

**Behavior:**

* Guest → redirected to login
* Authenticated user → access cart/checkout

**Role-Based UI:**

* Admin → manage products
* User → purchase products

---

### 4️⃣ Checkout & Order Flow 📦

On **Place Order**:

1. Cart → Order Context
2. Order created
3. Cart cleared

**Order Context Handles:**

* Order history
* Status tracking:

  * Pending
  * Shipped
  * Delivered

**Each Order Includes:**

* Items
* Total price
* Date
* Status

---

### 5️⃣ UI/UX Context 🎛️

**Handles:**

* Theme (Dark/Light)
* Loading states
* Toast notifications
* Modal control

**Examples:**

* Loader during API calls
* Success message after order

---

## 🔄 Complete User Flow

1. User opens app → Products load
2. User searches → Filter applied
3. User adds item → Cart updates
4. User views cart → Total calculated
5. User logs in → Auth stored
6. User places order → Order saved + cart cleared
7. UI shows success message

---

## 🛠 Tech Stack

* React
* Context API
* JavaScript (ES6+)
* CSS / Tailwind (if used)
* LocalStorage

---

## ⚙️ Installation

```bash
git clone https://github.com/your-username/repo-name.git
cd repo-name
npm install
npm start
```

---

## 📌 Future Improvements

* Payment integration (Stripe/Razorpay)
* Backend (Node.js + MongoDB)
* JWT authentication
* Admin dashboard
* Wishlist feature
* Performance optimization

---

## 📸 Screenshots

<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/fb52edbe-69e7-4f7b-ab7b-f3bb7c8787f7" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/d590bf01-ea09-4f5c-a09e-b6589fe30729" />
<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/60f3cbbe-6403-408b-b61a-eb9ca5ec0a12" />

---

## 📊 Badges

*Add from shields.io:*

* Build Status
* License
* Tech Stack

---

## 📄 License

This project is open-source and available under the MIT License.
