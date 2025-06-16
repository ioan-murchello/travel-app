import MainWrapper from "../components/MainWrapper";
import productImg from "../assets/img-2.jpg";
import Header from "../components/Header";
import Section from "../components/Section";
import { H1, H2, P } from "../components/Heading";
import Contaienr from "../components/Container";

const Product = () => {
  return (
    <MainWrapper img={productImg}>
      <Header />
      <Section>
        <Contaienr>
          <H1>WorldWise</H1>
          <H2>Track Your Adventures Around the Globe</H2>
          <br />

          <P>
            🌍 WorldWise is your personal travel companion that helps you
            document, visualize, and share every step of your journey.
            <br /> Whether you're a casual traveler or a world explorer,
            WorldWise makes it easy to keep track of the places you've visited,
            the memories you've made, and the experiences you've had.{" "}
          </P>
          <br />
          <P>
            ✈️ Features: Interactive World Map – Mark cities and countries
            you've visited and see your travel progress visually. Travel Notes –
            Add personal notes, dates, and stories for each destination.
            Organized Trips – Group multiple locations into trips and categorize
            them by purpose: vacation, business, adventure, etc. Mobile Friendly
            – Optimized for all screen sizes, so you can use it on the go.
            Modern Design – Clean and intuitive interface built with React,
            Styled Components, and React Router.
          </P>
          <br />
          <P>
            🌐 Why WorldWise? Unlike generic travel journals or social media
            apps, WorldWise is built just for travelers. It’s not about likes or
            filters — it’s about you and your journey. Every dot on your map
            tells a story only you can tell.
          </P>
        </Contaienr>
      </Section>
    </MainWrapper>
  );
};
export default Product;
