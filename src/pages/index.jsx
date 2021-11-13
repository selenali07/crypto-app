import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero'
import Info from '../components/Info'
import { about, homeObjThree} from '../components/Info/Data';
import Navbar from '../components/Navbar'
import Trending from '../components/Trending';
import Dashboard from '../components/Dashboard';
import MobileNav from '../components/MobileNav'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <MobileNav isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Hero />
      <Dashboard />
      <Info {...about}/>
      <Trending />
      <Info {...homeObjThree}/>
      <Footer />
    </>
  )
}

export default Home
