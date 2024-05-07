import { Notebook , ClockCountdown } from "@phosphor-icons/react";
import { HeaderContainer, HeaderLogo } from "./styles";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo weight="fill" />
      <nav>
        <NavLink to="/" title="Timer">
          <ClockCountdown />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Notebook  />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}