import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import "../styles/login.css"

export default function Login() {

  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  function handleChange(e) {
    const { name, value } = e.target
    setLoginData({ ...loginData, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const users = JSON.parse(localStorage.getItem("users")) || []

    const validUser = users.find(user =>
      user.email === loginData.email &&
      user.password === loginData.password
    )

    if (!validUser) {
      alert("Invalid Credentials")
      return
    }

    // ✅ Save logged user
    localStorage.setItem("currentUser", JSON.stringify(validUser))


    navigate("/")
  }

  return (
    <div className="login-container">

      <form onSubmit={handleSubmit} className="auth-box">

        <h2>Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={loginData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={loginData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Login</button>

        <p className="auth-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </form>

    </div>
  )
}