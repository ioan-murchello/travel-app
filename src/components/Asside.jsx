import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useEffect } from "react";
import { useCTX } from "../context/CitiesContext";

const StyledAside = styled.aside`
  width: 100%;
  height: 100%;
  background-color: var(--color-dark--1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  color: var(--color-white--1);
  font-size: 1.2rem;
  padding: 5rem 0;
  transition: all 0.7s ease-in;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${(props) =>
      props.$show ? "translateY(12%)" : "translateY(100%)"};
    padding: 1rem 0;
    z-index: ${(props) => (props.$show ? 1200 : 1000)};
  }
`;

const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 7rem 0 0 0;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const ShowAsideBtn = styled.div`
  position: relative;
  top: ${(props) => (props.$show ? 0 : "-70px")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  background-color: var(--color-dark--1);
  padding: 1rem;
  transition: all 0.3s ease-in-out;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledBtn = styled(Link)`
  ${(props) =>
    props.$active
      ? "background-color: var(--color-brand--2); border: 3px solid var(--color-brand--1);"
      : "background-color: var(--color-brand--3);"}
  color: var(--color-white--1);
  font-size: 1.7rem;
  padding: 0.5rem;
  min-width: 120px;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Asside = ({ children }) => {
  const { showCities, setShowCities } = useCTX();
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    // Set state only on initial mount, based on window size
    const mobileView = window.innerWidth <= 768;
    setShowCities(mobileView);
  }, [setShowCities]);

  return (
    <StyledAside $show={showCities}>
      <ShowAsideBtn $show={showCities}>
        {showCities ? (
          <TbSquareRoundedArrowDownFilled
            style={{ color: "var(--color-brand--1)" }}
            onClick={() => setShowCities((prev) => !prev)}
          />
        ) : (
          <TbSquareRoundedArrowUpFilled
            style={{ color: "var(--color-brand--1)" }}
            onClick={() => setShowCities((prev) => !prev)}
          />
        )}
      </ShowAsideBtn>

      <BtnWrapper>
        <StyledBtn to="/map/cities" $active={currentPath === "/map/cities"}>
          Cities
        </StyledBtn>

        <StyledBtn
          to="/map/countries"
          $active={currentPath === "/map/countries"}
        >
          Countries
        </StyledBtn>
      </BtnWrapper>

      {children}
    </StyledAside>
  );
};
export default Asside;
