import Banner from '@/components/Banner'
import CardSection from '@/components/CardScetion'
import Dessert from '@/components/Dessert'
import Entertainment from '@/components/Entertainment'
import Explore from '@/components/Explore'
import Footer from '@/components/Footer'
import Fountain from '@/components/Fountain'
import Gallery from '@/components/Gallery'
import Navbar from '@/components/Navbar'
import Resort from '@/components/Resort'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <CardSection></CardSection>
      <Resort></Resort>
      <Entertainment></Entertainment>
      <Fountain></Fountain>
      <Explore></Explore>
      <Gallery></Gallery>
      <Dessert></Dessert>
      <Footer></Footer>
    </main>
  )
}
