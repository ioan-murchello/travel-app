import styled from "styled-components";

const H1 = styled.h1`
  font-size: 4.5rem;
  line-height: 5.6rem;
  @media (max-width: 768px) {
    font-size: 2.9rem; 
  }
  @media (max-width: 600px) {
    font-size: 2.2rem; 
  }
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem; 
  @media (max-width: 768px) {
    font-size: 2rem; 
  }
  @media (max-width: 600px) {
    font-size: 1.8rem; 
  }
`;

const P = styled.p`
  font-size: 1.8rem;
  color: var(--color-light--2);
  text-align: left;
  @media (max-width: 768px) {
    font-size: 1.4rem; 
  }
  @media (max-width: 600px) {
    font-size: 1.2rem; 
  }
`;
export { H1, H2, P };
