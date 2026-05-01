'use client'

import { useState, useEffect } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useAuth } from '../../src/context/AuthContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { isLoggedIn, logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLogout = () => {
    logout()
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center transform rotate-45 mr-2">
                <div className="transform -rotate-45">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M8 8L16 16M16 8L8 16" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink href="/wrogn-x-srh">WROGN X SRH</NavLink>
            <NavLink href="/bestsellers">BESTSELLERS</NavLink>
            <NavLink href="/products">ALL PRODUCTS</NavLink>
            <NavLink href="/topwear">TOPWEAR</NavLink>
            <NavLink href="/bottomwear">BOTTOMWEAR</NavLink>
            <NavLink href="/backpacks">BACKPACKS</NavLink>
            <NavLink href="/footwear">FOOTWEAR</NavLink>
            <NavLink href="/fresh-arrivals">FRESH ARRIVALS</NavLink>
            <NavLink href="/essentials">ESSENTIALS</NavLink>
          </div>

          {/* Right Section - Search and Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center bg-gray-50 rounded-full px-4 py-2 w-64">
              <Search className="h-4 w-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* User Account */}
            <div className="hidden lg:block">
              {isLoggedIn ? (
                <div className="relative group">
                  <IconButton>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">W</span>
                    </div>
                  </IconButton>
                  <AccountDropdown onLogout={handleLogout} />
                </div>
              ) : (
                <Link href="/login">
                  <IconButton>
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">W</span>
                    </div>
                  </IconButton>
                </Link>
              )}
            </div>

            {/* Cart */}
            <Link href="/cart">
              <IconButton hasNotification>
                <ShoppingBag className="h-5 w-5 text-gray-700" strokeWidth={1.5} />
              </IconButton>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 text-gray-700 transition-all duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="md:hidden mb-4">
                <div className="flex items-center bg-gray-50 rounded-full px-4 py-2">
                  <Search className="h-4 w-4 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent outline-none text-sm flex-1 text-gray-700 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Mobile Menu Links */}
              <div className="space-y-4">
                <MobileNavLink href="/wrogn-x-srh" onClick={() => setIsMenuOpen(false)}>
                  WROGN X SRH
                </MobileNavLink>
                <MobileNavLink href="/bestsellers" onClick={() => setIsMenuOpen(false)}>
                  BESTSELLERS
                </MobileNavLink>
                <MobileNavLink href="/products" onClick={() => setIsMenuOpen(false)}>
                  ALL PRODUCTS
                </MobileNavLink>
                <MobileNavLink href="/topwear" onClick={() => setIsMenuOpen(false)}>
                  TOPWEAR
                </MobileNavLink>
                <MobileNavLink href="/bottomwear" onClick={() => setIsMenuOpen(false)}>
                  BOTTOMWEAR
                </MobileNavLink>
                <MobileNavLink href="/backpacks" onClick={() => setIsMenuOpen(false)}>
                  BACKPACKS
                </MobileNavLink>
                <MobileNavLink href="/footwear" onClick={() => setIsMenuOpen(false)}>
                  FOOTWEAR
                </MobileNavLink>
                <MobileNavLink href="/fresh-arrivals" onClick={() => setIsMenuOpen(false)}>
                  FRESH ARRIVALS
                </MobileNavLink>
                <MobileNavLink href="/essentials" onClick={() => setIsMenuOpen(false)}>
                  ESSENTIALS
                </MobileNavLink>
              </div>

              {/* Mobile Account Section */}
              <div className="border-t border-gray-200 pt-4 mt-6">
                <div className="space-y-3">
                  {isLoggedIn ? (
                    <>
                      <Link href="/account" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-black font-medium text-sm py-2">
                        My Account
                      </Link>
                      <Link href="/orders" onClick={() => setIsMenuOpen(false)} className="block text-gray-700 hover:text-black font-medium text-sm py-2">
                        Orders
                      </Link>
                      <button 
                        onClick={handleLogout}
                        className="w-full mt-4 py-3 px-4 border border-red-600 text-red-600 font-medium text-sm bg-white hover:bg-red-50 transition-colors duration-200"
                      >
                        LOGOUT
                      </button>
                    </>
                  ) : (
                    <Link href="/login" className="block w-full mt-4" onClick={() => setIsMenuOpen(false)}>
                      <button className="w-full py-3 px-4 border border-black text-black font-medium text-sm bg-white hover:bg-gray-50 transition-colors duration-200">
                        LOG IN
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href} 
    className="text-gray-700 hover:text-black font-medium text-sm transition-colors duration-200 uppercase tracking-wide"
  >
    {children}
  </Link>
)

const IconButton = ({ children, hasNotification = false }: { 
  children: React.ReactNode; 
  hasNotification?: boolean 
}) => (
  <button className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-200">
    {children}
    {hasNotification && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
        2
      </span>
    )}
  </button>
)

const MobileNavLink = ({ href, children, onClick }: { 
  href: string; 
  children: React.ReactNode; 
  onClick: () => void 
}) => (
  <Link 
    href={href} 
    onClick={onClick}
    className="block text-gray-700 hover:text-black font-medium tracking-wide uppercase text-base transition-colors duration-200 py-2"
  >
    {children}
  </Link>
)

const AccountDropdown = ({ onLogout }: { onLogout: () => void }) => (
  <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
    <div className="py-2">
      <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
        My Account
      </Link>
      <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
        Orders
      </Link>
      <Link href="/rewards" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
        Rewards
      </Link>
      <Link href="/stores" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200">
        Find Stores
      </Link>
      <hr className="my-2" />
      <button 
        onClick={onLogout}
        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 transition-colors duration-200"
      >
        Logout
      </button>
    </div>
  </div>
)

export default Header