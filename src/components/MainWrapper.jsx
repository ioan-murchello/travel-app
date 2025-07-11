import styled from "styled-components";

const StyledMainWrapper = styled.div`
  background-image: linear-gradient(
      rgba(36, 42, 46, 0.8),
      rgba(36, 42, 46, 0.8)
    ),
    url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  height: 100%;
`;

const MainWrapper = ({ img, children }) => {
  return <StyledMainWrapper $img={img}>{children}</StyledMainWrapper>;
};
export default MainWrapper;
