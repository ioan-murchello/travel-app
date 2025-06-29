import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { formatDate } from "../helpers/helpers";
import { MdDeleteForever } from "react-icons/md";
import { useState } from "react";

const StyledUl = styled.ul`
  width: 100%;
  height: 65vh;
  list-style: none;
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 1fr;

  align-content: start;
  gap: 1.6rem;

  ${({ $modified }) =>
    $modified &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
    `}
`;

const StyledLi = styled.li`
  border: ${(props) =>
    props.$isActive ? "2px solid var(--color-brand--2)" : "none"};
  display: flex;
  align-items: center;
  justify-content: ${({ $modified }) =>
    !$modified ? "space-between" : "center"};
  padding-right: ${({ $modified }) => (!$modified ? "2rem" : "0")};
  background: #ff960d;
  background: linear-gradient(
    90deg,
    #5f513e 0%,
    rgba(87, 199, 133, 1) 59%,
    rgba(31, 110, 78, 1) 100%
  );
  border-radius: 6px;

  ${({ $modified }) =>
    $modified
      ? css`
          background: #2770c6b3;
        `
      : css`
          border-left: 5px solid var(--color-brand--2);
          background: #ff960d;
          background: linear-gradient(
            90deg,
            #312f2d 0%,
            #4d9c6e 59%,
            rgba(31, 110, 78, 1) 100%
          );
        `}
`;

const CityCard = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 60px 1fr 1fr;
  gap: 1.5rem;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  @media (max-width: 600px) {
    grid-template-columns: auto;
    gap: 0.5rem;
  }
`;

const CountryCard = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: ${({ $modified }) =>
    !$modified ? "1fr 1fr" : "1fr 55px"};
  gap: 1.5rem;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
`;

const Flag = styled.span`
  font-size: 2.5rem;
  display: inline-block;
`;

const CityName = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  @media (max-width: 600px) {
    font-size: 1.4em;
  }
`;

const CountryName = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
`;

const SvgStyles = styled(MdDeleteForever)`
  width: 3rem;
  height: 3rem;
  color: var(--color-dark--0);
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    color: var(--color-yellow--3);
  }
`;

const List = ({ list, removeCity, modified }) => {
  const [active, setActive] = useState(null);
  if (!list || list.length === 0) return null;

  const isCity = list[0].cityName !== undefined;

  return (
    <>
      {isCity ? (
        <StyledUl className="no-scrollbar">
          {list.map((item, i) => (
            <StyledLi
              onClick={() => setActive(i)}
              key={item.id}
              $modified={modified}
              $isActive={active === i}
            >
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
                to={`/map/cities/city/${item.cityName?.toLowerCase()}?lat=${
                  item.lat
                }&lng=${item.lng}`}
              >
                <CityCard>
                  <Flag>{item.emoji}</Flag>
                  <CityName>{item.cityName}</CityName>
                  <p style={{ fontSize: "1.4rem" }}>{formatDate(item.date)}</p>
                </CityCard>
              </NavLink>

              <SvgStyles onClick={() => removeCity(item.cityName)} />
            </StyledLi>
          ))}
        </StyledUl>
      ) : (
        <StyledUl $modified={modified} className="no-scrollbar">
          {list.map((item) => (
            <StyledLi key={item.country} $modified={modified}>
              <CountryCard $modified={modified}>
                <CountryName>{item.country}</CountryName>
                <Flag>{item.emoji}</Flag>
              </CountryCard>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </>
  );
};

export default List;
