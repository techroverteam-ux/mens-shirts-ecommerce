import ProductCard from '../ui/ProductCard'

const bestsellers = [
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
  }
]

const BestsellerSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-display font-bold tracking-tighter text-primary uppercase mb-4">
              BESTSELLERS
            </h2>
            <p className="text-xl text-secondary max-w-lg">
              Most loved pieces from our community of style enthusiasts
            </p>
          </div>
          <button className="text-primary hover:text-accent font-medium uppercase tracking-wide transition-colors duration-200 flex items-center space-x-2 group">
            <span>VIEW ALL BESTSELLERS</span>
            <svg className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <div className="flex space-x-8 pb-4" style={{ width: 'max-content' }}>
            {bestsellers.map((product, index) => (
              <div key={product.id} className="w-80 flex-shrink-0">
                <ProductCard {...product} className={index === 0 ? 'ring-2 ring-accent/20' : ''} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile Scroll Indicator */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="flex space-x-2">
            {bestsellers.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BestsellerSection