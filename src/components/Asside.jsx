import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

const StyledAside = styled.aside`
  width: 100%;
  height: 100dvh;
  background-color: var(--color-dark--1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  color: var(--color-white--1);
  font-size: 1.2rem;
  padding: 5rem 1rem;
  transition: all 0.7s ease-in;

  @media (max-width: 768px) {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: ${(props) =>
      props.$show ? "translateY(13%)" : "translateY(94%)"};
    padding: 1rem 1rem;
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
  const [showAsside, setShowAsside] = useState(false);
  const [hideAsside, setHideAsside] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowAsside(false) 
        setHideAsside(true);
      } else {
        setShowAsside(false)
        setHideAsside(false);
      }
    };

    handleResize(); // Set initial state based on window size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledAside $show={showAsside}>
      {hideAsside && (
        <div>
          {showAsside ? (
            <TbSquareRoundedArrowDownFilled
              style={{ color: "var(--color-brand--1)" }}
              onClick={() => setShowAsside((prev) => !prev)}
            />
          ) : (
            <TbSquareRoundedArrowUpFilled
              style={{ color: "var(--color-brand--1)" }}
              onClick={() => setShowAsside((prev) => !prev)}
            />
          )}
        </div>
      )}
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
