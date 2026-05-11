import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ProductsSection from '@/components/products-section'
import ShopSection from '@/components/shop-section'
import GallerySection from '@/components/gallery-section'
import BeautySection from '@/components/beauty-section'
import ReviewsSection from '@/components/reviews-section'
import MeetUsSection from '@/components/meet-us-section'
import NewsletterSection from '@/components/newsletter-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ShopSection />
      <GallerySection />
      <BeautySection />
      <ReviewsSection />
      <MeetUsSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
