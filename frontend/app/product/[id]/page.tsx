'use client'

import { useState } from 'react'
import Layout from '../../../components/layout/Layout'
import Button from '../../../components/ui/Button'
import { Heart, Minus, Plus, ChevronDown, Star } from 'lucide-react'

const ProductDetailPage = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = {
    id: '1',
    name: 'Essential Black Tee',
    price: 1299,
    originalPrice: 1599,
    rating: 4.5,
    reviews: 128,
    description: 'Premium cotton blend t-shirt with a modern fit. Perfect for everyday wear with superior comfort and style.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    features: [
      '100% Premium Cotton',
      'Pre-shrunk fabric',
      'Reinforced seams',
      'Machine washable'
    ]
  }

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden bg-gray-100 border-2 transition-colors duration-300 ${
                    selectedImage === index ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tighter text-primary uppercase mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-primary">₹{product.price}</span>
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice}</span>
                <span className="bg-accent text-white px-2 py-1 text-sm font-bold">
                  {discount}% OFF
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <h3 className="font-bold uppercase tracking-wide mb-3 text-primary">SIZE</h3>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-sm font-medium border-2 transition-all duration-300 ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-white'
                        : 'border-gray-300 hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-bold uppercase tracking-wide mb-3 text-primary">QUANTITY</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-gray-300">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <Button size="lg" className="w-full" disabled={!selectedSize}>
                ADD TO CART
              </Button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="w-full flex items-center justify-center space-x-2 py-3 border-2 border-gray-300 hover:border-primary transition-colors duration-300"
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                <span className="font-medium uppercase tracking-wide">
                  {isWishlisted ? 'REMOVE FROM WISHLIST' : 'ADD TO WISHLIST'}
                </span>
              </button>
            </div>

            {/* Product Features */}
            <div>
              <h3 className="font-bold uppercase tracking-wide mb-3 text-primary">FEATURES</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-4">
              <AccordionItem title="SIZE GUIDE">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Our sizes run true to fit. For the best fit, we recommend:</p>
                  <ul className="space-y-1 ml-4">
                    <li>• XS: 34-36 chest</li>
                    <li>• S: 36-38 chest</li>
                    <li>• M: 38-40 chest</li>
                    <li>• L: 40-42 chest</li>
                    <li>• XL: 42-44 chest</li>
                    <li>• XXL: 44-46 chest</li>
                  </ul>
                </div>
              </AccordionItem>
              
              <AccordionItem title="SHIPPING & RETURNS">
                <div className="text-sm text-gray-600 space-y-2">
                  <p>Free shipping on orders over ₹999</p>
                  <p>Easy 30-day returns and exchanges</p>
                  <p>Delivery in 2-5 business days</p>
                </div>
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    
  )
}

const AccordionItem = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-medium uppercase tracking-wide text-primary">{title}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-4">
          {children}
        </div>
      )}
    </div>
  )
}

export default ProductDetailPage