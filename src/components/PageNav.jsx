import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import LogoImage from "./LogoImage";

import { LiaMapMarkedAltSolid } from "react-icons/lia";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
  @media (max-width: 600px) {
      gap: 2.5rem;
  }
`;

const Li = styled.li`
  all: unset;
  &.active {
    color: var(--color-brand--2);
    text-decoration: none !important;
  }

  &:last-child && {
    text-decoration: none;
  }

  color: var(--color-light--2);
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 600;
  a {
    color: var(--color-light--2);
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

const links = [
  { url: "/product", name: "Product" },
  { url: "/pricing", name: "Pricing" },
  { url: "/map", name: "Map" },
];

const PageNav = () => {
  return (
    <Nav>
      <NavLink style={{ cursor: "pointer" }} to="/">
        <LogoImage />
      </NavLink>
      <Ul>
        {links.map((link) => (
          <Li key={link.name}>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "activeLink" : ""} ${
                  link.name === "Map" ? "cta" : ""
                }`
              }
              to={link.url}
            >
              {link.name === "Map" ? <LiaMapMarkedAltSolid /> : link.name}
            </NavLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};
export default PageNav;
