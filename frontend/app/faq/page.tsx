'use client'
import { useState } from 'react'
import Breadcrumb from '../../components/ui/Breadcrumb'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I cancel the order that I have placed?",
      answer: "You can cancel your order within 24 hours of placing it. To cancel, log into your account, go to 'My Orders', find the order you want to cancel, and click on 'Cancel Order'. If the option is not available, please contact our customer service team at care@wrogn.com or WhatsApp us at +91-8095733338."
    },
    {
      question: "How do I raise a return request?",
      answer: "To raise a return request: 1) Sign in to your WROGN account, 2) Select 'Orders and Returns' from the customer drop-down, 3) Choose the order you wish to return and select the 'return' option, 4) A pickup request will be raised and you'll receive confirmation via email/SMS. Returns must be initiated within 7 days of delivery."
    },
    {
      question: "I have raised a return request. When will my product be picked up?",
      answer: "Our delivery executives will pick up your return within 4-7 business days from the date of placing the return request. You'll receive updates via email and SMS throughout the process. If you don't receive updates, please contact us at care@wrogn.com."
    },
    {
      question: "I have raised a return request. When will I get the refund?",
      answer: "Refunds are processed within 5-7 business days after we receive and inspect your returned item. The refund will be credited to your original payment method. Please note that delivery charges (₹49) are non-refundable for COD orders and prepaid orders below ₹799."
    },
    {
      question: "What are the terms of WROGN shipping policy?",
      answer: "We offer free shipping on orders above ₹799. For orders below ₹799, a delivery charge of ₹49 applies. Standard delivery takes 3-5 business days. We deliver across India, though some remote areas may take additional 1-2 days. COD is available for orders between ₹799-₹2999."
    },
    {
      question: "How do I check the status of my order?",
      answer: "You can track your order by: 1) Logging into your WROGN account, 2) Going to 'My Orders' section, 3) Clicking on the specific order to view tracking details. You'll also receive tracking information via SMS and email once your order is shipped."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, debit cards, UPI, net banking, and cash on delivery (COD). COD is available for orders between ₹799-₹2999. All online payments are secured with SSL encryption."
    },
    {
      question: "How do I know what size to order?",
      answer: "Please refer to our detailed size guide available on each product page. The size chart includes measurements for chest, waist, length, and sleeve measurements. If you're unsure, we recommend ordering your usual size or contacting our customer service for personalized sizing advice."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we only ship within India. International shipping will be available soon. Please stay tuned to our website and social media channels for updates on international shipping availability."
    },
    {
      question: "Can I exchange my product for a different size or color?",
      answer: "Yes, you can exchange your product for any size of the same item or a different product of equal or higher value within 7 days of delivery. Exchanges are subject to stock availability and serviceability of your location. The product must be unused with all tags intact."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: 'FAQ' }]} />
          
          <h1 className="text-3xl font-bold text-gray-900 mb-12 text-center">FAQS</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-gray-500 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:care@wrogn.com"
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Email Us: care@wrogn.com
              </a>
              <a
                href="https://wa.me/918095733338"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                WhatsApp: +91-8095733338
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}