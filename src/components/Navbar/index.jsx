import React, {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const navImg={
  width:'3rem',
  height:'auto',
  margin: '1rem',
};

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
    <IconContext.Provider value={{ color: '#fff'}}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <img src="./images/doge.svg" alt="doge" style = {navImg}/>
            CryptoDash
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='dashboard'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='about'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='trending'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Trending</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='events'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Events</NavLinks>
            </NavItem>
          </NavMenu>
        
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
