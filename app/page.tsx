import Image from 'next/image'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Content from './components/Content'
import Carousel from './components/Carousel'
import BottomFooter from './components/BottomFooter'
import Footer from './components/Footer'

export default function Home() {
  return (
   <main>
      <NavBar />
      <Header />
      <Content />
      <Carousel />
      <BottomFooter />
      <Footer />
   </main>
  )
}
