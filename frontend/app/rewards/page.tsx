import Layout from '../../components/layout/Layout'
import { Gift, Star, Trophy, Zap } from 'lucide-react'

const RewardsPage = () => {
  return (
    
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">VCHUKI Rewards</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn points with every purchase and unlock exclusive benefits. 
              The more you shop, the more you save!
            </p>
          </div>

          {/* Rewards Balance Card */}
          <div className="bg-gradient-to-r from-accent to-accent-warm rounded-xl p-8 text-white mb-12">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Your Rewards Balance</h2>
                <p className="text-3xl font-bold">2,450 Points</p>
                <p className="text-sm opacity-90">Worth ₹245 in rewards</p>
              </div>
              <div className="text-6xl opacity-20">
                <Gift />
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-card">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Earn Points</h3>
                <p className="text-gray-600">Get 1 point for every ₹10 spent on your purchases</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-card">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Unlock Tiers</h3>
                <p className="text-gray-600">Reach higher tiers for better rewards and exclusive perks</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-card">
                  <Zap className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">Redeem Rewards</h3>
                <p className="text-gray-600">Use points for discounts, free shipping, and exclusive items</p>
              </div>
            </div>
          </div>

          {/* Membership Tiers */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Membership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2"></div>
                  <h3 className="text-lg font-semibold">Silver</h3>
                  <p className="text-sm text-gray-600">₹0 - ₹9,999 spent</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 1 point per ₹10 spent</li>
                  <li>• Birthday discount</li>
                  <li>• Early sale access</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card border-2 border-accent">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-2"></div>
                  <h3 className="text-lg font-semibold">Gold</h3>
                  <p className="text-sm text-gray-600">₹10,000 - ₹49,999 spent</p>
                  <span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded-full mt-1">Current</span>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 1.5 points per ₹10 spent</li>
                  <li>• Free shipping always</li>
                  <li>• Exclusive collections</li>
                  <li>• Priority customer service</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-black rounded-full mx-auto mb-2"></div>
                  <h3 className="text-lg font-semibold">Platinum</h3>
                  <p className="text-sm text-gray-600">₹50,000+ spent</p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 2 points per ₹10 spent</li>
                  <li>• Personal stylist</li>
                  <li>• VIP events access</li>
                  <li>• Custom tailoring discounts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Available Rewards */}
          <div>
            <h2 className="text-2xl font-bold text-black mb-8 text-center">Available Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-card text-center">
                <h3 className="font-semibold text-black mb-2">₹100 Off</h3>
                <p className="text-2xl font-bold text-accent mb-2">1000 pts</p>
                <button className="btn-outline px-4 py-2 text-sm rounded">Redeem</button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card text-center">
                <h3 className="font-semibold text-black mb-2">Free Shipping</h3>
                <p className="text-2xl font-bold text-accent mb-2">500 pts</p>
                <button className="btn-outline px-4 py-2 text-sm rounded">Redeem</button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card text-center">
                <h3 className="font-semibold text-black mb-2">₹500 Off</h3>
                <p className="text-2xl font-bold text-accent mb-2">5000 pts</p>
                <button className="btn-outline px-4 py-2 text-sm rounded">Redeem</button>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-card text-center">
                <h3 className="font-semibold text-black mb-2">Exclusive Shirt</h3>
                <p className="text-2xl font-bold text-accent mb-2">10000 pts</p>
                <button className="btn-outline px-4 py-2 text-sm rounded">Redeem</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default RewardsPage