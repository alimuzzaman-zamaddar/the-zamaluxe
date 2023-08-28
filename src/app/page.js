import Banner from '@/components/Banner'
import CardSection from '@/components/CardScetion'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <CardSection></CardSection>
    
    </main>
  )
}
