import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export default function CartContextProvider({ children }) {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const storageKey = currentUser
    ? `cart_${currentUser.email}`
    : "cart_guest"

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) || []
  })


  // ✅ SAVE CART PER USER
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cart))
  }, [cart, storageKey])


  function addToCart(product) {

    let exist = cart.find(function (item) {
      return item.id === product.id
    })


    if (exist) {

      let updatedCart = cart.map(function (item) {

        if (item.id === product.id) {
          return {
            ...item,
            qty: item.qty + 1
          }
        } else {
          return item
        }

      })

      setCart(updatedCart)

    }

    else {

      let newProduct = {
        ...product,
        qty: 1
      }

      setCart([...cart, newProduct])
    }
  }

  function removeFromCart(id) {
    let updatedCart = cart.filter(item => item.id !== id)
    setCart(updatedCart)
  }


  function updateQty(id, type) {

    let updatedCart = cart.map(item => {

      if (item.id === id) {

        if (type === "inc") {
          return { ...item, qty: item.qty + 1 }
        }

        if (type === "dec") {
          return { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        }
      }

      return item
    })

    setCart(updatedCart)
  }

    // ✅ CLEAR CART (after order)
  function clearCart() {
    setCart([])
  }

  let totalItems = cart.reduce((acc, item) => acc + item.qty, 0)


  let totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQty,
      totalItems,
      totalPrice,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}