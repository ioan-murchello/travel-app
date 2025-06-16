import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const LoadSpinnerWrapper = styled.div`
  display: "flex";
  flex-direction: "column";
  align-items: "center";
`;

const LoadSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 6px solid #e0e0e0;
  border-top: 6px solid #00bcd4;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <LoadSpinnerWrapper>
        <LoadSpinner />
      </LoadSpinnerWrapper>
    </SpinnerWrapper>
  );
}
