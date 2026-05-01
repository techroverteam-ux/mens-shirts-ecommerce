'use client'

import { useState } from 'react'
import Button from '../../components/ui/Button'
import { Minus, Plus, X, ShoppingBag } from 'lucide-react'

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Essential Black Tee',
      price: 1299,
      size: 'M',
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: '2',
      name: 'Premium White Shirt',
      price: 2499,
      size: 'L',
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 999 ? 0 : 99
  const total = subtotal + shipping

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
          <h1 className="text-3xl font-bold tracking-tighter text-primary uppercase mb-4">
            YOUR CART IS EMPTY
          </h1>
          <p className="text-gray-600 mb-8">Add some items to get started</p>
          <Button size="lg">
            CONTINUE SHOPPING
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold tracking-tighter text-primary uppercase mb-8">
          SHOPPING CART
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-200">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover bg-gray-100"
                />
                
                <div className="flex-1">
                  <h3 className="font-medium text-primary mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Size: {item.size}</p>
                  <p className="font-bold text-primary">₹{item.price}</p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-gray-100 rounded transition-colors duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors duration-300"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 sticky top-24">
              <h2 className="text-xl font-bold tracking-tighter text-primary uppercase mb-6">
                ORDER SUMMARY
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                {shipping === 0 && (
                  <p className="text-sm text-green-600">Free shipping on orders over ₹999!</p>
                )}
                <div className="border-t border-gray-300 pt-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full mb-4">
                PROCEED TO CHECKOUT
              </Button>
              
              <Button variant="outline" size="lg" className="w-full">
                CONTINUE SHOPPING
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-lg">Total: ₹{total}</span>
          <span className="text-sm text-gray-600">{cartItems.length} items</span>
        </div>
        <Button size="lg" className="w-full">
          PROCEED TO CHECKOUT
        </Button>
      </div>
    </div>
  )
}

export default CartPage