import React, {useState, useEffect} from 'react'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtnLink, NavBtn } from './NavbarElements'
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle, isOpen }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    const toggleHome = () => {
        scroll.scrollToTop()
    }
  return (
    <>
          <Nav scrollNav={scrollNav}>
              <NavContainer>
                  <NavLogo to='/' onClick={toggleHome}>CoinTastic</NavLogo>
                  <MobileIcon onClick={toggle} isOpen={isOpen}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to="about"
                          smooth={true} duration={500} spy={true} exact='true' offset={-80}
                          >About</NavLinks>
                      </NavItem>
                       <NavItem>
                          <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Feed</NavLinks>
                      </NavItem>
                       <NavItem>
                          <NavLinks to="Testimonials" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Testimonials</NavLinks>
                      </NavItem>
                       <NavItem>
                          <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Courses</NavLinks>
                      </NavItem>
                       <NavItem>
                          <NavLinks to="register" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Register</NavLinks>
                      </NavItem>

                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to='/signup'>Sign In</NavBtnLink>
                  </NavBtn>
              </NavContainer>
        </Nav>
    </>
  )
}

export default Navbar