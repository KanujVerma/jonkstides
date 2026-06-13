import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import BrandValues from '@/components/home/BrandValues'
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel'
import PartnerBanner from '@/components/home/PartnerBanner'
import TikTokTeaser from '@/components/home/TikTokTeaser'
import SocialCTA from '@/components/home/SocialCTA'
import { getFeaturedProducts } from '@/lib/square/catalog'

const TESTIMONIALS = [
  { _id: 't1', name: 'Mike R.', quote: "Fastest shipping I've experienced. Arrived in 2 days and the quality is exactly what I needed for my research.", rating: 5 },
  { _id: 't2', name: 'Sarah K.', quote: "Finally a supplier I can actually trust. The COAs are legit and the pricing is the best I've found.", rating: 5 },
  { _id: 't3', name: 'James T.', quote: "Been ordering for 6 months. Consistent quality every time. The Discord community is a great bonus.", rating: 5 },
]

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <>
      <HeroSection />
      <PartnerBanner />
      <FeaturedProducts products={products} />
      <BrandValues />
      <TestimonialsCarousel testimonials={TESTIMONIALS} />
      <TikTokTeaser />
      <SocialCTA />
    </>
  )
}
