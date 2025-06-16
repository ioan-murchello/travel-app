import styled from "styled-components";

const InfoWrapper = styled.article`
  width: fit-content;
  padding: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1.6rem;
`;

const StyledPopup = ({ city }) => {
  return (
    <InfoWrapper>
      <div>
        <b>City:</b> {city.cityName}
      </div>
      <div>
        <b>Country:</b> {city.country}
      </div>
      <p>{city.display_name}</p>
    </InfoWrapper>
  );
};
export default StyledPopup;
