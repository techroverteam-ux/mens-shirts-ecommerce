'use client'

import { useState, useEffect } from 'react'
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
      isScrolled 
        ? 'backdrop-blur-glass border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold tracking-tighter transition-colors duration-250 ${
              isScrolled ? 'text-primary' : 'text-white text-shadow'
            }`}>
              VCHUKI
            </h1>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-12">
              <NavLink href="#" isScrolled={isScrolled}>MEN</NavLink>
              <NavLink href="#" isScrolled={isScrolled}>NEW ARRIVALS</NavLink>
              <NavLink href="#" isScrolled={isScrolled}>BESTSELLERS</NavLink>
              <NavLink href="#" isScrolled={isScrolled}>COLLECTIONS</NavLink>
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <IconButton isScrolled={isScrolled}>
              <Search className="h-5 w-5" strokeWidth={1.5} />
            </IconButton>
            <IconButton isScrolled={isScrolled}>
              <User className="h-5 w-5" strokeWidth={1.5} />
            </IconButton>
            <IconButton isScrolled={isScrolled} hasNotification>
              <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
            </IconButton>
            
            {/* Mobile menu button */}
            <button 
              className={`lg:hidden p-2 rounded-full transition-all duration-200 ${
                isScrolled 
                  ? 'hover:bg-gray-100 text-primary' 
                  : 'hover:bg-white/10 text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-glass border-b border-gray-200/20">
            <div className="px-6 py-8 space-y-6">
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>MEN</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>NEW ARRIVALS</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>BESTSELLERS</MobileNavLink>
              <MobileNavLink href="#" onClick={() => setIsMenuOpen(false)}>COLLECTIONS</MobileNavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

const NavLink = ({ href, children, isScrolled }: { href: string; children: React.ReactNode; isScrolled: boolean }) => (
  <a 
    href={href} 
    className={`font-medium tracking-wide uppercase text-sm transition-colors duration-250 ${
      isScrolled 
        ? 'text-primary hover:text-accent' 
        : 'text-white hover:text-accent text-shadow'
    }`}
  >
    {children}
  </a>
)

const IconButton = ({ children, isScrolled, hasNotification = false }: { 
  children: React.ReactNode; 
  isScrolled: boolean; 
  hasNotification?: boolean 
}) => (
  <button className={`relative p-2 rounded-full transition-all duration-200 ${
    isScrolled 
      ? 'hover:bg-gray-100 text-primary' 
      : 'hover:bg-white/10 text-white'
  }`}>
    {children}
    {hasNotification && (
      <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
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
  <a 
    href={href} 
    onClick={onClick}
    className="block text-primary hover:text-accent font-medium tracking-wide uppercase text-lg transition-colors duration-200"
  >
    {children}
  </a>
)

export default Navbar