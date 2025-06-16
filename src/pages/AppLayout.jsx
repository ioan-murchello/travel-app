import { Outlet } from "react-router-dom";
import { styled } from "styled-components"; 

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;  
`;

const StyledOutlet = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;    
  width: 100%;  
`;

const AppLayout = () => {
  return (
    <Main>
      <StyledOutlet> 
        <Outlet /> 
      </StyledOutlet>
    </Main>
  );
};
export default AppLayout;
