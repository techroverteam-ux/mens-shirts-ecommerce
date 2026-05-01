import Carousel from '../components/sections/Carousel'
import CategoryGrid from '../components/sections/CategoryGrid'
import BestsellerSection from '../components/sections/BestsellerSection'
import PromoBanner from '../components/sections/PromoBanner'

export default function Home() {
  return (
    <>
      <Carousel />
      <CategoryGrid />
      <BestsellerSection />
      <PromoBanner />
    </>
  )
}
