import Breadcrumb from '../../components/ui/Breadcrumb'

export default function CancellationPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'Cancellation Policy' }]} />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">CANCELLATION POLICY</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg">
              The customer is entitled to a complete refund, including shipping charges, if the product is:
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-8">
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Cancelled</h3>
                <p className="text-red-700 text-sm">Order cancelled by customer or system</p>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Lost</h3>
                <p className="text-yellow-700 text-sm">Product lost during transit</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Undelivered</h3>
                <p className="text-blue-700 text-sm">Unable to deliver to preferred location</p>
              </div>
            </div>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">Important Note:</h3>
              <p className="text-orange-800">
                If you cancel part of the order, shipping charges will not be refunded.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How to Cancel Your Order</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step-by-Step Cancellation Process:</h3>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Log into your WROGN account using your registered email ID</li>
                <li>Navigate to "My Orders" section from your account dashboard</li>
                <li>Find the order you want to cancel</li>
                <li>Click on "Cancel Order" if the option is available</li>
                <li>Select your reason for cancellation from the dropdown menu</li>
                <li>Confirm the cancellation request</li>
                <li>You'll receive a confirmation email/SMS about the cancellation</li>
              </ol>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cancellation Timeline</h2>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Within 24 Hours</h4>
                  <p className="text-green-700 text-sm">Orders can be cancelled easily through your account. Full refund including shipping charges.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900">Before Shipping</h4>
                  <p className="text-yellow-700 text-sm">If not yet shipped, cancellation is possible. Contact customer service for assistance.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900">After Shipping</h4>
                  <p className="text-red-700 text-sm">Cannot be cancelled. You can return the item after delivery as per our return policy.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Refund Process</h2>
            
            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Refund Timeline:</h3>
              <ul className="list-disc pl-6 text-blue-800 space-y-2">
                <li><strong>Credit/Debit Cards:</strong> 5-7 business days</li>
                <li><strong>Net Banking:</strong> 5-7 business days</li>
                <li><strong>UPI:</strong> 3-5 business days</li>
                <li><strong>Cash on Delivery:</strong> No payment made, no refund needed</li>
              </ul>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Unable to Cancel Online?</h2>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                If you're unable to cancel your order online or if the cancel option is not available, 
                please contact our customer service team immediately:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:care@wrogn.com"
                  className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-center"
                >
                  Email: care@wrogn.com
                </a>
                <a
                  href="https://wa.me/918095733338"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 text-center"
                >
                  WhatsApp: +91-8095733338
                </a>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-red-900 mb-2">Important Reminder</h3>
              <p className="text-red-800">
                Orders that have been shipped cannot be cancelled. However, you can return them 
                once delivered as per our <a href="/return-refund-and-exchange-policy" className="underline hover:text-red-900">return and exchange policy</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}