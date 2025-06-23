import styled from "styled-components";

const btnTypes = {
  back: `
    background-color: var(--color-dark--1);
    outline: none; 
  `,
  primary: `
    background-color: var(--color-brand--2); 
    border-radius: 6px;
  `,
  danger: `
    background-color: #e71d1d;
  `,
};

const StyledButton = styled.button`
  ${(props) => btnTypes[props.$typeBtn] || btnTypes.back};
  padding: 1rem;
  color: white;
  cursor: pointer;
  border-radius: 6px;
  padding: 1.5rem 3rem;
  font-size: 1.4rem;
`;

const Button = ({ children, onClick, typeOfBtn }) => {
  return (
    <StyledButton onClick={onClick} $typeBtn={typeOfBtn}>
      {children}
    </StyledButton>
  );
};
export default Button;
