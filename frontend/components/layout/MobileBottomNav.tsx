'use client'

import { Home, Search, ShoppingBag, User, Heart } from 'lucide-react'
import { useState } from 'react'

const MobileBottomNav = () => {
  const [activeTab, setActiveTab] = useState('home')

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', href: '/' },
    { id: 'search', icon: Search, label: 'Search', href: '/search' },
    { id: 'cart', icon: ShoppingBag, label: 'Cart', href: '/cart', badge: 2 },
    { id: 'wishlist', icon: Heart, label: 'Wishlist', href: '/wishlist' },
    { id: 'account', icon: User, label: 'Account', href: '/account' }
  ]

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 backdrop-blur-glass">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              <div className="relative">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
                {item.badge && (
                  <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs rounded-full h-4 w-4 flex items-center justify-center font-bold">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MobileBottomNav