

import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Sponsors from '../components/Sponsors'
import Domain from '../components/Domains/Domain'
import Prizes from '../components/Prizes/Prizes'
import About from '../components/About/About'
export default function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <About></About>
      <Sponsors></Sponsors>
      <Domain></Domain>
      <Prizes></Prizes>
    </>
  )
}
