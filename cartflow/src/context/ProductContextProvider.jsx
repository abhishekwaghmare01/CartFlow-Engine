import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

export default function ProductContextProvider({ children }) {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('all')

 useEffect(() => {

  async function fetchData() {

    try {
      let data = []

      if (category === "all") {

        const urls = [
          "http://localhost:3000/mens",
          "http://localhost:3000/womens",
          "http://localhost:3000/kids",
          "http://localhost:3000/electronics"
        ]

        // 🔥 parallel API calls
        const responses = await Promise.all(
          urls.map(url => fetch(url))
        )

        // 🔥 convert all to JSON
        const results = await Promise.all(
          responses.map(res => res.json())
        )

        // 🔥 flatten array
        data = results.flat()

      } else {

        const res = await fetch(`http://localhost:3000/${category}`)
        data = await res.json()
      }

      setProducts(data)

    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }

  fetchData()

}, [category])


  let filteredProducts = products.filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  )


  if (filter === "low") {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  if (filter === "high") {
    filteredProducts.sort((a, b) => b.price - a.price)
  }

  if (filter === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating)
  }

  return (
    <ProductContext.Provider value={{
      products: filteredProducts,
      setSearch,
      setFilter,
      setCategory
    }}>
      {children}
    </ProductContext.Provider>
  )
}