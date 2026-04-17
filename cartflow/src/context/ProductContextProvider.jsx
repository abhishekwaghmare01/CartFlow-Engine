import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()

export default function ProductContextProvider({ children }) {

  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')
  const [category, setCategory] = useState('all')

  // 🔥 FETCH BASED ON CATEGORY
  useEffect(() => {

    async function fetchData() {

      let data = []

      if (category === "all") {
        // 🔥 merge all categories
        let res1 = await fetch("http://localhost:3000/mens")
        let res2 = await fetch("http://localhost:3000/womens")
        let res3 = await fetch("http://localhost:3000/kids")
        let res4 = await fetch("http://localhost:3000/electronics")

        let mens = await res1.json()
        let womens = await res2.json()
        let kids = await res3.json()
        let electronics = await res4.json()

        data = [...mens, ...womens, ...kids, ...electronics]

      } else {
        // 🔥 fetch only selected category
        let res = await fetch(`http://localhost:3000/${category}`)
        data = await res.json()
      }

      setProducts(data)
    }

    fetchData()

  }, [category])

  // 🔥 SEARCH
  let filteredProducts = products.filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase())
  )

  // 🔥 SORT
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