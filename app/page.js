import Banner1 from '@/components/Banner1'
import Contact from '@/components/Contact'
import Customers from '@/components/Customers'
import Feature from '@/components/Feature'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import News from '@/components/News'
import NewsLetter from '@/components/NewsLetter'
import Pricing from '@/components/Pricing'
import Properties from '@/components/Properties'
import Service from '@/components/Service'
import Team from '@/components/Team'

export default function Home() {
  return (
    <main>
      <Header />
      {/* <Feature /> */}
      <Banner1 />
      <Properties />
      <Feature />
      {/* <Service /> */}
      <Customers />
      <News />
      <NewsLetter />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
