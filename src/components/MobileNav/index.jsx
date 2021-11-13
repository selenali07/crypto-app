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
          <MobileNavLink to='Trending' onClick={toggle}>Trending</MobileNavLink>
          <MobileNavLink to='signup' onClick={toggle}>Sign up</MobileNavLink>
        </MobileNavMenu>
        <SideBtnWrap>
          <MobileNavRoute to='/signin'>Sign in</MobileNavRoute>
        </SideBtnWrap>
      </MobileNavWrapper>
    </MobileNavContainer>
  )
}

export default MobileNav
