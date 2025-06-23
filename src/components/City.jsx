import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { useCTX } from "../context/CitiesContext";
import styled from "styled-components";
import { multiplyDates } from "../helpers/helpers";
import Spinner from "./Spinner";

const Container = styled.div`
  text-align: center;
  max-width: 80%;
  margin: 3rem auto;
  padding: 2rem;
  color: #fff;
  line-height: 1.6;
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const StyledSpan = styled.div`
  font-weight: 700;
  color: var(--color-brand--2);
`;

const Heading = styled.h6`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 600;
  color: #b3b6bb;
  margin-bottom: 0.25rem;
`;

const Title = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Paragraph = styled.p`
  color: #d4dded;
`;

const Link = styled.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const lang = navigator?.language?.split("-")[0] || "en";

function City() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { cities, isLoading } = useCTX();

  const currentCity = cities.find((city) => city.cityName.toLowerCase() === id);
  const date = multiplyDates(currentCity.date);

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <Section>
        <Heading>City name</Heading>
        <Title>
          <span>{currentCity.emoji}</span> {currentCity.cityName}
        </Title>
        <span>{`(${currentCity.display_name})`}</span>
      </Section>

      <Section>
        <Heading>
          You {`${date === "future" ? "go" : "went"}`} to{" "}
          <StyledSpan>{currentCity.cityName}</StyledSpan> on
        </Heading>
        <Paragraph>{currentCity.date}</Paragraph>
      </Section>

      {currentCity.notes && (
        <Section>
          <Heading>Your notes</Heading>
          <Paragraph>{currentCity.notes}</Paragraph>
        </Section>
      )}

      <Section>
        <Heading>Learn more</Heading>
        <Link
          href={`https://${lang}.wikipedia.org/wiki/${currentCity.cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {currentCity.cityName} on Wikipedia &rarr;
        </Link>
      </Section>

      <Button typeOfBtn="back" onClick={() => navigate(-1)}>
        &larr; Back
      </Button>
    </Container>
  );
}

export default City;
