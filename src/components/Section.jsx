import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
  width: 100%;
`;

const Section = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
