import Link from 'next/link'

const StoreLocator = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 text-sm uppercase tracking-wide mb-2">WROGN STORE.</p>
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                RIGHT PLACE.
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Find how close you're to going wrogn!
            </p>
            
            <Link href="/stores">
              <button className="bg-black text-white px-8 py-4 text-sm font-medium uppercase tracking-wide hover:bg-gray-800 transition-colors duration-300">
                See All Stores
              </button>
            </Link>
          </div>

          {/* Right Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Large Image - Top Right */}
            <div className="col-span-2 h-64 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="WROGN Store Interior"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Left Image */}
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Store Display"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Bottom Right Image */}
            <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Clothing Display"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoreLocator