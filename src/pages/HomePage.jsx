
// import { useEffect } from 'react'
import Home from '../components/Home/Home'
import Navbar from '../components/Navbar/Navbar'
import Sponsors from '../components/Sponsors'
import Domain from '../components/Domains/Domain'
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
      <Sponsors></Sponsors>
      <Domain></Domain>
      <Glimpse></Glimpse>
      <Contact></Contact>
    </>
  )
}
