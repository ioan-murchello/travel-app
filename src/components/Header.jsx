import styled, { css } from "styled-components";
import PageNav from "./PageNav";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 5rem;
  padding: 0 2rem;
  color: var(--color-light--2);
  margin: 30px; 

  ${({ $pos }) =>
    $pos === "pos"
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          width: 100%;
          background-color: #4c4c4c61; 
          margin: 0;
          padding: 6px 2rem;
          height: auto;
          backdrop-filter: blur(3px);

        `
      : css`
          position: static;
        `}
`; 

const Header = ({pos}) => {
  return (
    <StyledHeader $pos={pos}>
      <PageNav />
    </StyledHeader>
  );
};
export default Header;
