const TrustBanner = () => {
  return (
    <div className="bg-gray-100 border-t border-b border-gray-200">
      <div className="container mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Free Shipping */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">FREE SHIPPING FOR</h3>
              <p className="text-gray-900 text-sm uppercase tracking-wide">ORDERS ABOVE ₹599</p>
            </div>
          </div>

          {/* On Time Delivery */}
          <div className="flex items-center justify-center space-x-3 border-l border-r border-gray-300 md:border-l md:border-r-0 lg:border-r">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">PROMISE, ON TIME</h3>
              <p className="text-gray-900 text-sm uppercase tracking-wide">DELIVERY</p>
            </div>
          </div>

          {/* Secure Payment */}
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">100% SECURE</h3>
              <p className="text-gray-900 text-sm uppercase tracking-wide">PAYMENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustBanner