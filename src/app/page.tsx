import Image from 'next/image'
import Banner from './Components/Banner'
import Navbar from './Components/Navbar'
import Header from "./Components/Header"
import Hero from './Components/Hero'
import About from './Components/About'
export default function Home() {
  return <>
  
<Banner/>
{/* <Navbar/> */}
<Header/>
<Hero/>
<About/>
  </>
}
