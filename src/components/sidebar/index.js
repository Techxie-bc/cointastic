import React from 'react'
import { SidebarContainer  , Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute, SideBtnWrap, SidebarLink } from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
      // <h4>hello</h4>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
              <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home" onClick={toggle}>
              Home
            </SidebarLink>
             <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Feed
            </SidebarLink>
            <SidebarLink to="register" onClick={toggle}>
              Testimonials
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Courses
            </SidebarLink>
            <SidebarLink to="register" onClick={toggle}>
              Register
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to='/signup'>Sign In</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
          
    </SidebarContainer>
  )
}

export default Sidebar