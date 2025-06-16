import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import LogoImage from "./LogoImage";

import { LiaMapMarkedAltSolid } from "react-icons/lia";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 4rem;
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
              className={link.name === "Map" ? "cta" : ""}
              style={({ isActive }) =>
                isActive ? { fontWeight: "bold" } : undefined
              }
              to={link.url}
            >
              {link.name === "Map" ? (
                <LiaMapMarkedAltSolid
                  style={{ width: "4rem", height: "4rem" }}
                />
              ) : (
                link.name
              )}
            </NavLink>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};
export default PageNav;
