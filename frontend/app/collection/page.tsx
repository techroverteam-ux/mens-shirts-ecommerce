'use client'

import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import ProductCard from '../../components/ui/ProductCard'
import Button from '../../components/ui/Button'
import { Filter, X, ChevronDown } from 'lucide-react'

const products = [
  {
    id: '1',
    name: 'Essential Black Tee',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f37f4678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'SALE' as const
  },
  {
    id: '2',
    name: 'Premium White Shirt',
    price: 2499,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    name: 'Urban Hoodie',
    price: 3299,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'NEW' as const
  },
  {
    id: '4',
    name: 'Denim Jacket',
    price: 4599,
    originalPrice: 5299,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '5',
    name: 'Graphic Tee',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    tag: 'LIMITED' as const
  },
  {
    id: '6',
    name: 'Casual Polo',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]

const CollectionPage = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    
      <div className="pt-20">
        {/* Hero Banner */}
        <div className="relative h-64 bg-primary flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-display font-bold tracking-tighter uppercase mb-4">
              ALL PRODUCTS
            </h1>
            <p className="text-xl opacity-90">Discover our complete collection of premium streetwear</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          {/* Top Bar */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12 space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-6">
              <button 
                className="lg:hidden flex items-center space-x-2 text-primary hover:text-accent transition-colors duration-200"
                onClick={() => setIsMobileFilterOpen(true)}
              >
                <Filter className="h-5 w-5" strokeWidth={1.5} />
                <span className="font-medium uppercase tracking-wide">FILTERS</span>
              </button>
              <span className="text-secondary">
                {products.length} Products
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-primary">SORT BY:</span>
                <div className="relative">
                  <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-none px-4 py-2 pr-8 text-sm focus:outline-none focus:border-primary cursor-pointer"
                  >
                    <option value="popular">POPULAR</option>
                    <option value="price-low">PRICE: LOW TO HIGH</option>
                    <option value="price-high">PRICE: HIGH TO LOW</option>
                    <option value="newest">NEWEST</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-12">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-32">
                <FilterSidebar />
              </div>
            </div>

            {/* Mobile Filter Overlay */}
            {isMobileFilterOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)}></div>
                <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white overflow-y-auto">
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-8">
                      <h3 className="text-xl font-bold uppercase tracking-wide">FILTERS</h3>
                      <button 
                        onClick={() => setIsMobileFilterOpen(false)}
                        className="p-2 hover:bg-gray-50 rounded-full transition-colors duration-200"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </div>
                    <FilterSidebar />
                    <div className="mt-8 space-y-4">
                      <Button fullWidth onClick={() => setIsMobileFilterOpen(false)}>
                        APPLY FILTERS
                      </Button>
                      <Button variant="outline" fullWidth>
                        CLEAR ALL
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-16">
                <Button variant="outline" size="lg">
                  LOAD MORE PRODUCTS
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

const FilterSidebar = () => {
  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <FilterSection title="CATEGORY">
        <div className="space-y-3">
          {['T-Shirts', 'Shirts', 'Hoodies', 'Jackets', 'Polos', 'Accessories'].map((category) => (
            <FilterCheckbox key={category} label={category} />
          ))}
        </div>
      </FilterSection>

      {/* Size Filter */}
      <FilterSection title="SIZE">
        <div className="grid grid-cols-3 gap-2">
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <SizeButton key={size} size={size} />
          ))}
        </div>
      </FilterSection>

      {/* Color Filter */}
      <FilterSection title="COLOR">
        <div className="grid grid-cols-6 gap-3">
          {[
            { name: 'Black', color: '#000000' },
            { name: 'White', color: '#FFFFFF' },
            { name: 'Gray', color: '#6B7280' },
            { name: 'Navy', color: '#1E3A8A' },
            { name: 'Red', color: '#DC2626' },
            { name: 'Green', color: '#059669' },
            { name: 'Blue', color: '#2563EB' },
            { name: 'Brown', color: '#92400E' }
          ].map((color) => (
            <ColorButton key={color.name} color={color} />
          ))}
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection title="PRICE">
        <div className="space-y-3">
          {[
            'Under ₹1,000',
            '₹1,000 - ₹2,000', 
            '₹2,000 - ₹3,000',
            '₹3,000 - ₹5,000',
            'Above ₹5,000'
          ].map((range) => (
            <FilterCheckbox key={range} label={range} />
          ))}
        </div>
      </FilterSection>
    </div>
  )
}

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-bold uppercase tracking-wide mb-4 text-primary text-sm">{title}</h3>
    {children}
  </div>
)

const FilterCheckbox = ({ label }: { label: string }) => (
  <label className="flex items-center space-x-3 cursor-pointer group">
    <input 
      type="checkbox" 
      className="w-4 h-4 border-2 border-gray-300 rounded-none focus:ring-primary focus:ring-2 text-primary" 
    />
    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors duration-200">{label}</span>
  </label>
)

const SizeButton = ({ size }: { size: string }) => {
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <button 
      onClick={() => setIsSelected(!isSelected)}
      className={`py-2 text-sm font-medium border-2 transition-all duration-200 ${
        isSelected
          ? 'border-primary bg-primary text-white'
          : 'border-gray-300 hover:border-primary text-gray-700 hover:text-primary'
      }`}
    >
      {size}
    </button>
  )
}

const ColorButton = ({ color }: { color: { name: string; color: string } }) => {
  const [isSelected, setIsSelected] = useState(false)
  
  return (
    <button 
      onClick={() => setIsSelected(!isSelected)}
      className={`w-10 h-10 rounded-full border-2 transition-all duration-200 ${
        isSelected ? 'border-primary scale-110' : 'border-gray-300 hover:border-primary hover:scale-105'
      }`}
      style={{ backgroundColor: color.color }}
      title={color.name}
    >
      {color.color === '#FFFFFF' && (
        <div className="w-full h-full rounded-full border border-gray-200"></div>
      )}
    </button>
  )
}

export default CollectionPage