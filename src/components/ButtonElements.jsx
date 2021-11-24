import styled from 'styled-components';
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  border-radius: 4rem;
  white-space: nowrap;
  padding: .8rem 2.25rem;
  font-size:1.1rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: #0AFF99;
  border: 0.1rem #0AFF99 solid;
  background: transparent;
  background: #0AFF99;
  color: #010606;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #0AFF99;
    color: #010606;
    border: 0.1rem #0AFF99 solid;

  }

  @media screen and (max-width: 62rem) {
    transition: all 0.2s ease-in-out;
    background: #0AFF99;
    color: #010606;
    &:hover {
      transition: all 0.2s ease-in-out;
      color: #0AFF99;
      background: transparent;
    }
  }

`
export const ButtonNav = styled.a`
  white-space: nowrap;
  padding: .8rem 1rem;
  font-size:2rem;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: #fff

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #010606;
  }

  @media screen and (max-width: 62rem) {
    transition: all 0.2s ease-in-out;
    color: #010606;
    &:hover {
      transition: all 0.2s ease-in-out;
    }
  }

`