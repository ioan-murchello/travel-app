import { Link } from "react-router-dom";
import { styled } from "styled-components";

import bgImg from "../img/bg.jpg";
import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 85%;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  text-align: center;
`;

const H1 = styled.h1`
  font-size: 4.5rem;
  line-height: 1.3;
`;

const H2 = styled.h2`
  font-size: 2.5rem;
  color: var(--color-light--1);
  margin-bottom: 2.5rem;
  width: 90%;
`;

const Homepage = () => { 
  return (
    <MainWrapper img={bgImg}>
      <Header />
      <Section>
        <H1>
          {" "}
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </H1>
        <H2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </H2>
        <Link to="/map" className="cta">
          Start tracking now
        </Link>
      </Section>
    </MainWrapper>
  );
};
export default Homepage;
