import { Link } from "react-router-dom";
import { styled } from "styled-components";

import bgImg from "../img/bg.jpg";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import { H1, H2 } from "../components/Heading";
import Container from "../components/Container";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
`;

const Homepage = () => {
  return (
    <MainWrapper img={bgImg}>
      <Header />
      <Section>
        <Container>
          <H1>
            {" "}
            You travel the world. WorldWise keeps track of your adventures.
          </H1>
          <H2>
            A world map that tracks your footsteps into every city you can think
            of. Never forget your wonderful experiences, and show your friends
            how you have wandered the world.
          </H2>
          <Link to="/map" className="cta">
            Start tracking now
          </Link>
        </Container>
      </Section>
    </MainWrapper>
  );
};
export default Homepage;
