import { Outlet } from "react-router-dom";
import styled from "styled-components";

const OutletWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: gray;
`;
const ListsWrapper = () => {
  return (
    <OutletWrapper>
      <Outlet />
    </OutletWrapper>
  );
};
export default ListsWrapper;
