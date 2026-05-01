import Link from 'next/link'

const WearItLikeVirat = () => {
  const products = [
    {
      id: 1,
      name: "Textured Checkered Patchwork Shirt",
      color: "Blue",
      price: 1499,
      originalPrice: 2599,
      discount: 42,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-red-600"
    },
    {
      id: 2,
      name: "Solid Linen Blend Shirt",
      color: "White",
      price: 1799,
      originalPrice: 2599,
      discount: 30,
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-slate-600"
    },
    {
      id: 3,
      name: "Casual Comfort Fit Shirt With Double Pockets",
      color: "Brown",
      price: 1249,
      originalPrice: 2299,
      discount: 45,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-amber-600"
    },
    {
      id: 4,
      name: "Double Layered Check Slim Fit Shirt",
      color: "Brown",
      price: 1549,
      originalPrice: 2599,
      discount: 40,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bgColor: "bg-slate-400"
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            WEAR IT LIKE VIRAT AND IAK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              {/* Main Product Image */}
              <div className={`relative ${product.bgColor} aspect-[3/4] mb-4 overflow-hidden`}>
                <img
                  src={product.image}
                  alt={`${product.name} | ${product.color}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Discount Badge */}
                <div className="absolute top-4 left-4 bg-white text-black px-2 py-1 text-xs font-bold">
                  {product.discount}% OFF
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-end justify-center pb-4">
                  <button className="bg-white text-black px-6 py-2 text-sm font-medium uppercase tracking-wide opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-100">
                    QUICK VIEW
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-black leading-tight">
                  {product.name} | {product.color}
                </h3>
                
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-black">₹{product.price}</span>
                  <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                  <span className="text-sm text-green-600 font-medium">({product.discount}% OFF)</span>
                </div>
              </div>

              {/* Small Product Image */}
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-16 h-20 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <Link href={`/product/${product.id}`}>
                    <button className="w-full bg-white border border-gray-300 text-black px-4 py-2 text-xs font-medium uppercase tracking-wide hover:bg-gray-50 transition-colors duration-300 flex items-center justify-between">
                      QUICK VIEW
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/collection">
            <button className="bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WearItLikeVirat