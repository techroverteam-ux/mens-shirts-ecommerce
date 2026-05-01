const StoresPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Find Our Stores</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit our physical stores to experience the quality of our shirts firsthand. 
            Our knowledgeable staff will help you find the perfect fit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Store Card 1 */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold text-black mb-2">Mumbai - Bandra</h3>
            <p className="text-gray-600 mb-4">
              Shop No. 15, Linking Road,<br />
              Bandra West, Mumbai - 400050
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Hours:</strong> 10:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Store Card 2 */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold text-black mb-2">Delhi - Connaught Place</h3>
            <p className="text-gray-600 mb-4">
              Block A, Inner Circle,<br />
              Connaught Place, New Delhi - 110001
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p><strong>Phone:</strong> +91 98765 43211</p>
              <p><strong>Hours:</strong> 10:00 AM - 9:00 PM</p>
            </div>
          </div>

          {/* Store Card 3 */}
          <div className="bg-white rounded-lg shadow-card p-6">
            <h3 className="text-xl font-semibold text-black mb-2">Bangalore - Koramangala</h3>
            <p className="text-gray-600 mb-4">
              80 Feet Road, 4th Block,<br />
              Koramangala, Bangalore - 560034
            </p>
            <div className="space-y-2 text-sm text-gray-500">
              <p><strong>Phone:</strong> +91 98765 43212</p>
              <p><strong>Hours:</strong> 10:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find a store near you? We're expanding soon!
          </p>
          <button className="btn-primary px-8 py-3 rounded-lg">
            Get Notified About New Stores
          </button>
        </div>
      </div>
    </div>
  )
}

export default StoresPage