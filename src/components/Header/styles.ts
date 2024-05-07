import styled from 'styled-components';
import { Timer } from "@phosphor-icons/react";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
    font-size: 1.5rem;

    a {
      color: ${props => props.theme['gray-100']};
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s ease;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:focus {
        box-shadow: none;
      }

      &:hover {
        color: ${props => props.theme['green-500']};
        border-bottom: 3px solid ${props => props.theme['green-500']};
      }
      
      &.active {
        color: ${props => props.theme['green-500']};
      }
    }
  }
`

export const HeaderLogo = styled(Timer)`
  width: 3rem;
  height: 3rem;
  color: ${props => props.theme['green-500']};
`