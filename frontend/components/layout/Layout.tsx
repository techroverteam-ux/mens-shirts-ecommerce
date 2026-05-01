import Header from './Header'
import Footer from './Footer'
import MobileBottomNav from './MobileBottomNav'
import TrustBanner from '../sections/TrustBanner'
import StoreLocator from '../sections/StoreLocator'
import WeAreWrognCarousel from '../sections/WeAreWrognCarousel'
import WearItLikeVirat from '../sections/WearItLikeVirat'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <WeAreWrognCarousel />
      <WearItLikeVirat />
      <StoreLocator />
      <TrustBanner />
      <Footer />
      <MobileBottomNav />
      {/* Mobile bottom nav spacing */}
      <div className="h-16 lg:hidden"></div>
    </div>
  )
}

export default Layout