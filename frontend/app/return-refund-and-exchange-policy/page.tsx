import Breadcrumb from '../../components/ui/Breadcrumb'

export default function ReturnRefundExchangePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'WROGN Return, Refund and Exchange Policy' }]} />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-8">WROGN RETURN, REFUND AND EXCHANGE POLICY</h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              WROGN offers a return and exchange policy with an option to return or exchange items purchased on our website within the specified 7-day return/exchange period for all WROGN products.
            </p>

            <p>
              The return and exchange option will be active within 24 hours from the time of delivery of the product.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">To raise a return or exchange request:</h2>
            
            <ol className="list-decimal pl-6 space-y-3">
              <li>Sign in to your WROGN account using your registered Email ID or through your Facebook or Google account.</li>
              <li>Select the "Orders and Returns" section from the customer drop-down list.</li>
              <li>Proceed to select the order you wish to return or exchange and choose either the "return" or "exchange" option.</li>
              <li>The pick-up request will be raised, and an email/SMS will be sent to your registered email ID/phone number.</li>
              <li>You can track the status of your return/exchange requests under the "Orders and Returns" section of the customer drop-down list.</li>
            </ol>

            <p>
              Our delivery executives will carry out the return or exchange within 4 - 7 business days from the date of placing the request.
            </p>

            <p>
              At WROGN, we provide constant updates to our customers via email and SMS during the return or exchange process.
            </p>

            <p>
              If you haven't received any updates or have any concerns, please email our customer care team at <a href="mailto:care@wrogn.com" className="text-red-600 hover:underline">care@wrogn.com</a>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Return, Refund and Exchange Policy Guidelines and Conditions:</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Product Condition Requirements</h3>
                <p>
                  Any and all items that a customer would like to return or exchange must be unused and should be returned in their original condition with all the tags and packaging intact. (for e.g. shoes must be returned in the original shoe box). Items should be given to the delivery executive in an undamaged condition.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Refund Process</h3>
                <p>
                  A refund will be initiated for the return amount (Excluding the Delivery Charges of 49 Rs) only if all the Quality check parameters are met during doorstep inspection by our partner and the product meets the conditions of our "Return and Exchange Policy".
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Quality Check Parameters:</h3>
                <ul className="list-disc pl-6 space-y-2 text-blue-800">
                  <li>The product should be returned in its original packaging.</li>
                  <li>Ensure that all protective materials and labels/tags are intact.</li>
                  <li>The product should be unused and in the same condition as when it was received.</li>
                  <li>There should be no signs of wear, stains, or damage.</li>
                  <li>Include all original documentation, such as manuals, warranty cards, and any other relevant paperwork.</li>
                  <li>All accessories if any that came with the product must be returned.</li>
                  <li>Follow the return authorization process specified by the seller (WROGN).</li>
                  <li>Ensure the product is returned within the specified return period as per the seller's policy.</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Delivery Charges</h3>
                <p>
                  Delivery charges are non-refundable for all COD orders and for prepaid orders below 799 Rs. For all COD orders, delivery charges will be applied at the time of checkout.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">4. COD Limitations</h3>
                <p>
                  No COD option is available for orders below 799 Rs and above 2999 Rs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Refund Amount</h3>
                <p>
                  If you return or cancel an order, the paid price of the product (including the tax collected) will be refunded to you. However, handling charges are non-refundable and hence shall not be reflected in the final refund amount.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Free Replacement</h3>
                <p>
                  If you wish to exchange the item because there is a mismatch of size or if you have received a defective piece, WROGN will provide you with a replacement of the item, free of cost.
                </p>
              </div>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">7. Exchange Policy</h3>
                <p className="text-green-800 mb-3">
                  Under WROGN's Exchange Policy, customers can exchange their product for any size of the same or a different product of the same or higher price. For instance, if a customer purchases a red shirt in size 'S', they can exchange it not only for another size of the same red shirt but also for a different product of equal or greater value. The customer will not be able to exchange it for a product of lesser value.
                </p>
                <p className="text-green-700 text-sm">
                  Note that exchanges are subject to the availability of stock and are also dependent on whether your location is serviceable by our logistics team.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-yellow-900 mb-3">8. Time Limitations</h3>
                <p className="text-yellow-800">
                  If the customer does not hand over the product within 7 business days from the date of the return/exchange request being raised, the request will be cancelled. At WROGN, we ensure that our delivery executives will pick up the products for return/exchange within this time period.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-red-900 mb-3">9. Quality Check at Pickup</h3>
                <p className="text-red-800">
                  Please note: The quality checks are conducted during the pickup of the product, ensuring faster processing. If the product is found to have been used or does not meet our exchange criteria at the time of pickup, it will no longer be eligible for an exchange or refund. In such cases, the product will remain with the customer and exchange/return request would be cancelled.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">10. Free Gifts Policy</h3>
                <p>
                  WROGN routinely rolls out schemes where you may receive a free gift/offer along with your main purchase. In case you have purchased an item, which has a free gift/offer associated with it, you will have to return both the product you've purchased and all additional gifts/products that you received along with it.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">11. Special Offers Exclusion</h3>
                <p>
                  The WROGN Return and Exchange Policy does not apply to special offers and promotional schemes that are frequently run on the website. There are separate terms and conditions for each promotional scheme run by WROGN. If customers have any queries or doubts regarding this, they can reach out to our customer care team.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">12. Damaged Product Claims</h3>
                <p className="text-orange-800">
                  For any missing, incorrect or damaged product received, we will require unboxing video footage to claim for returns or exchange.
                </p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-700">
                For any questions about our return, refund, and exchange policy, please contact our customer care team at{' '}
                <a href="mailto:care@wrogn.com" className="text-red-600 hover:underline">
                  care@wrogn.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}