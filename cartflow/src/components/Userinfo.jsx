import React, { useEffect, useState } from 'react'
import '../styles/userinfo.css'

export default function Userinfo() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("users")) || []
    setUsers(data)
  }, [])

  return (
    <div className="user-container">

      <h2>All Users</h2>

      {
        users.length === 0 ? (
          <p>No Users Found</p>
        ) : (
          <table className="user-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              {
                users.map((u, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{u.name}</td>
                    <td>{u.email}</td>
                    <td>{u.role}</td>
                  </tr>
                ))
              }
            </tbody>

          </table>
        )
      }

    </div>
  )
}