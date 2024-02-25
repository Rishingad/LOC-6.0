
// import { useEffect } from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Sponsors from '../components/Sponsors'
import Domain from '../components/Domains/Domain'
import Prizes from '../components/Prizes/Prizes'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Glimpse from '../components/Glimpse/Glimpse'
export default function HomePage() {
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apply.devfolio.co/v2/sdk.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);
  return (
    <>
      <Navbar />
      <Home />
      <About></About>
      <Sponsors></Sponsors>
      <Domain></Domain>
      <Prizes></Prizes>
      <Glimpse></Glimpse>
      <Contact></Contact>
    </>
  )
}
