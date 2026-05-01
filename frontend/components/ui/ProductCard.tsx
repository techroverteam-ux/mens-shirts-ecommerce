'use client'

import { useState } from 'react'
import { Heart, Eye } from 'lucide-react'

interface ProductCardProps {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  hoverImage?: string
  isWishlisted?: boolean
  tag?: 'NEW' | 'SALE' | 'LIMITED'
  className?: string
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  hoverImage, 
  isWishlisted = false,
  tag,
  className = ''
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [wishlist, setWishlist] = useState(isWishlisted)

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <div 
      className={`group relative bg-white transition-all duration-250 hover:shadow-soft ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-portrait overflow-hidden bg-gray-100">
        <img
          src={isHovered && hoverImage ? hoverImage : image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-250 group-hover:scale-105 group-hover:brightness-110"
        />
        
        {/* Tag */}
        {tag && (
          <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wide ${
            tag === 'NEW' ? 'bg-primary text-white' :
            tag === 'SALE' ? 'bg-accent text-primary' :
            'bg-secondary text-white'
          }`}>
            {tag}
          </div>
        )}
        
        {/* Discount Badge */}
        {discount > 0 && !tag && (
          <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 text-xs font-bold uppercase tracking-wide">
            -{discount}%
          </div>
        )}
        
        {/* Wishlist Button */}
        <button
          onClick={() => setWishlist(!wishlist)}
          className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-200 backdrop-blur-xs"
        >
          <Heart 
            className={`h-4 w-4 transition-colors duration-200 ${
              wishlist ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`} 
            strokeWidth={1.5}
          />
        </button>
        
        {/* Quick View - Shows on Hover */}
        <div className={`absolute inset-x-4 bottom-4 transition-all duration-250 ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button className="w-full bg-white/95 hover:bg-white text-primary font-medium uppercase tracking-wide py-3 px-4 transition-all duration-200 backdrop-blur-xs flex items-center justify-center space-x-2">
            <Eye className="h-4 w-4" strokeWidth={1.5} />
            <span>QUICK VIEW</span>
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-6">
        <h3 className="font-medium text-primary mb-3 line-clamp-2 text-lg">{name}</h3>
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold text-primary">₹{price.toLocaleString()}</span>
          {originalPrice && (
            <span className="text-base text-secondary line-through">₹{originalPrice.toLocaleString()}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductCard