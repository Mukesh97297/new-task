import Advantage from './advantage/page'
import Fully from './fully/page'
import Header from './pages/navbar/page';
import Hero from './pages/hero/page';
import Footer from './pages/footer/page';
import Dex from './dex/page';




export default function Home() {
  return (
   <div>

      <Header/>
      <Hero/>
      <Dex/>
      <Fully/>
      <Advantage/>
      <Footer/>
     
   </div>    
    )
}
