import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../styles/addproduct.css'

export default function UpdateProduct() {

  const { id, category } = useParams()
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: '',
    price: '',
    image: '',
    rating: '',
    description: '',
    category: ''
  })

  // 🔥 FETCH EXISTING PRODUCT
  useEffect(() => {
    async function fetchProduct() {
      let res = await fetch(`http://localhost:3000/${category}/${id}`)
      let result = await res.json()
      setData(result)
    }
    fetchProduct()
  }, [id, category])

  // 🔥 INPUT CHANGE
  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // 🔥 UPDATE PRODUCT
  async function handleSubmit(e) {
    e.preventDefault()

    await fetch(`http://localhost:3000/${category}/${id}`, {
      method: "PUT", // or PATCH
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

     
    navigate("/") // go back home
    window.location.reload()

  }

  return (
    <div className="form-container">
      <h1>Update Product</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Product Name"
        />

        <input
          type="number"
          name="price"
          value={data.price}
          onChange={handleChange}
          placeholder="Price"
        />

        <input
          type="text"
          name="image"
          value={data.image}
          onChange={handleChange}
          placeholder="Image URL"
        />

        <input
          type="text"
          name="description"
          value={data.description}
          onChange={handleChange}
          placeholder="Description"
        />

        <input
          type="number"
          name="rating"
          value={data.rating}
          onChange={handleChange}
          placeholder="Rating"
        />

        <button type="submit">Update Product</button>

      </form>
    </div>
  )
}