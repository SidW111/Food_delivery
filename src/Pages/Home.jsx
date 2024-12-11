import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import Service from '../components/Service'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <About></About>
   <Qualities></Qualities>
   <Menu></Menu>
   <Service></Service>
   <Team></Team>
   <Reservation></Reservation>
   <Footer></Footer>
   </>
  )
}

export default Home