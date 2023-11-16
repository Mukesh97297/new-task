import Advantage from './advantage/page'
import Fully from './fully/page'
import Header from './pages/navbar/page';
import Hero from './pages/hero/page';
import Footer from './pages/footer/page';
import Dex from './dex/page';
import SlickCarousel from './pages/slider/page';

export default function Home() {
  return (
   <div>

      <Header/>
      <Hero/>
      <Dex/>
      <Fully/>
      <SlickCarousel/>
      <Advantage/>
      <Footer/>
     
   </div>    
    )
}
