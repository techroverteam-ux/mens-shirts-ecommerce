"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../src/context/AuthContext';
import { X, Star } from 'lucide-react';
import Image from 'next/image';

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const [notifyUpdates, setNotifyUpdates] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const { login } = useAuth();

  const offers = [
    "Get 10% OFF on orders above 2999",
    "Free shipping for orders above 599", 
    "7-day stress-free return & exchange"
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    
    setLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      const userData = {
        id: '1',
        name: 'John Doe',
        email: `${phoneNumber}@example.com`
      };
      
      login(userData);
      setLoading(false);
      router.push('/');
    }, 1500);
  };

  const handleClose = () => {
    router.push('/');
  };

  // Auto-rotate offers
  useState(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#000000' }}>
      {/* Close Button */}
      <button 
        onClick={handleClose}
        className="absolute top-4 right-4 z-50 p-2 text-white hover:text-gray-300 transition-colors duration-200 lg:hidden"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Left Section - Promotional Content */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000000 0%, #333333 52.5%, #000000 100%)' }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-12">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="https://assets.gokwik.co/uploads/1722850107777_WROGN-LOGO1.png" 
              alt="WROGN Logo" 
              className="h-16 w-auto mb-4"
            />
            <img 
              src="https://assets.gokwik.co/images/powered_by_kp_4px.svg" 
              alt="Powered by" 
              className="h-6 w-auto ml-8"
            />
          </div>

          {/* Header Text */}
          <h2 className="text-xl font-bold mb-12 text-center">
            Hey Fam! Log in to join the Wrogn Tribe!
          </h2>

          {/* Rotating Offers */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20">
            <div className="flex items-center mb-4">
              <Star className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-sm font-medium">
                {offers[currentSlide]}
              </span>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2">
              {offers.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-white' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Offer Cards */}
          <div className="space-y-4 w-full max-w-sm">
            {offers.map((offer, index) => (
              <div key={index} className="bg-white/5 border border-white/20 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-3 flex-shrink-0" />
                  <p className="text-sm font-medium">{offer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Close Button for Desktop */}
          <button 
            onClick={handleClose}
            className="hidden lg:block absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <img 
              src="https://assets.gokwik.co/uploads/1722850107777_WROGN-LOGO1.png" 
              alt="WROGN Logo" 
              className="h-12 w-auto mx-auto mb-4"
            />
            <h2 className="text-lg font-bold text-gray-900">
              Hey Fam! Log in to join the Wrogn Tribe!
            </h2>
          </div>

          {/* Form Header */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Unlock <span className="text-black">Superior Discounts</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Enter mobile number to login
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Phone Input */}
            <div>
              <div className="flex">
                <div className="flex items-center px-3 py-3 border border-r-0 border-gray-300 rounded-l-lg bg-gray-50">
                  <span className="text-sm text-gray-600 mr-2">🇮🇳</span>
                  <span className="text-gray-600">+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex items-center">
              <input
                id="notify-updates"
                type="checkbox"
                checked={notifyUpdates}
                onChange={(e) => setNotifyUpdates(e.target.checked)}
                className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
              />
              <label htmlFor="notify-updates" className="ml-2 text-xs text-gray-600">
                Notify me for any updates & offers
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || phoneNumber.length !== 10}
              className="w-full bg-black text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? 'Logging in...' : 'Continue'}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 mb-4">
              I accept that I have read & understood Gokwik's{' '}
              <button className="text-gray-500 underline hover:text-gray-700">
                Privacy Policy
              </button>{' '}
              and{' '}
              <button className="text-gray-500 underline hover:text-gray-700">
                T&Cs
              </button>
            </p>
            
            <a 
              href="mailto:kwikpass@gokwik.co?subject=Customer Support&body=Website : https://wrogn.com/"
              className="text-xs text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              Trouble logging in?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
