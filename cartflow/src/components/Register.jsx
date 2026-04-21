import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import '../styles/register.css'

export default function Register() {

  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user'
  })

  // 🔥 HANDLE INPUT CHANGE
  function handleChange(e) {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  // 🔥 HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault()

    let users = JSON.parse(localStorage.getItem("users")) || []

    // ❌ CHECK DUPLICATE EMAIL
    let exist = users.find((u) => u.email === user.email.trim())

    if (exist) {
      alert("User already exists")
      return
    }

    // ✅ SAVE USER
    users.push({
      ...user,
      name: user.name.trim(),
      email: user.email.trim()
    })

    localStorage.setItem("users", JSON.stringify(users))

    alert("Registered Successfully")

    navigate("/login")
  }

  return (
    <div className="auth-container">

      <form onSubmit={handleSubmit}>

        <h2>Register</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={user.password}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          
        >
          <option value="user">--- Select Role ---</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>

        <Link to="/login">Already have an account? Login</Link>

      </form>
    </div>
  )
}