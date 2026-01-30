import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])
  
  const addItem = (product, quantity = 1, customization = null) => {
    setItems(prevItems => {
      const existingIndex = prevItems.findIndex(
        item => item.id === product.id && 
        JSON.stringify(item.customization) === JSON.stringify(customization)
      )
      
      if (existingIndex >= 0) {
        const newItems = [...prevItems]
        newItems[existingIndex].quantity += quantity
        return newItems
      }
      
      return [...prevItems, { ...product, quantity, customization }]
    })
  }
  
  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index))
  }
  
  const updateQuantity = (index, quantity) => {
    if (quantity <= 0) {
      removeItem(index)
      return
    }
    setItems(prevItems => {
      const newItems = [...prevItems]
      newItems[index].quantity = quantity
      return newItems
    })
  }
  
  const clearCart = () => {
    setItems([])
  }
  
  const total = items.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
  
  return (
    <CartContext.Provider value={{
      items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      total
    }}>
      {children}
    </CartContext.Provider>
  )
}
