import React from 'react'
import { MobileNavContainer, Icon, CloseIcon, MobileNavWrapper, MobileNavMenu, MobileNavLink, MobileNavRoute, SideBtnWrap } from './MobileNavElements'

const MobileNav = ({isOpen,toggle}) => {
  return (
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink to='dashboard' onClick={toggle}>Dashboard</MobileNavLink>
          <MobileNavLink to='about' onClick={toggle}>About</MobileNavLink>
          <MobileNavLink to='trending' onClick={toggle}>Trending</MobileNavLink>
          <MobileNavLink to='events' onClick={toggle}>Events</MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  )
}

export default MobileNav
