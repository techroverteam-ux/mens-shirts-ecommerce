'use client'
import Link from 'next/link'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black text-white relative">
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section - Logo and Tagline */}
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            {/* Logo */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-yellow-400 flex items-center justify-center transform rotate-45">
                  <div className="transform -rotate-45">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="black" stroke="black" strokeWidth="2"/>
                      <path d="M8 8L16 16M16 8L8 16" stroke="yellow" strokeWidth="2"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Tagline */}
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-300 leading-tight">
                  FOR THE RIGHT<br />
                  KIND OF MAN.
                </h2>
              </div>
            </div>

            {/* Copyright */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm">
                © 2024, Wrogn Powered by TMRW
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.389H7.078v-3.471h3.047V9.413c0-3.008 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.389C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.169 1.858-.896 3.463-2.001 4.568C14.463 13.832 12.858 14.56 11 14.728v-1.568h2v-2H11V9.84h2v-2H11V6.272c1.858.169 3.463.896 4.568 2.001C16.672 9.377 17.4 10.982 17.568 12.84z"/>
                </svg>
              </a>
              
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* HELP Column */}
              <div>
                <h3 className="text-white font-semibold text-sm tracking-[3px] mb-6 uppercase">
                  HELP
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/account" className="text-gray-400 hover:text-white transition-colors text-sm">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/anti-corruption" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Anti Corruption Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/whistle-blower" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Whistle Blower Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ORDER SUPPORT Column */}
              <div>
                <h3 className="text-white font-semibold text-sm tracking-[3px] mb-6 uppercase">
                  ORDER SUPPORT
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/return-refund-and-exchange-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Return & Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/shipping-and-handling" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Shipping Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/cancellation-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Cancellation
                    </Link>
                  </li>
                </ul>
              </div>

              {/* ABOUT US Column */}
              <div>
                <h3 className="text-white font-semibold text-sm tracking-[3px] mb-6 uppercase">
                  ABOUT US
                </h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/stores" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Find a Store
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 w-12 h-12 bg-white text-black rounded-sm flex items-center justify-center hover:bg-gray-200 transition-colors"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  )
}

export default Footer