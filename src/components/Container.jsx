import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 946px;
  width: 100%;
`;

const Contaienr = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Contaienr;
