import Header from "../components/Header";
import MainWrapper from "../components/MainWrapper";
import Section from "../components/Section";
import pricingImg from "../assets/img-1.jpg";
import { H1, H2, P } from "../components/Heading";
import Container from "../components/Container";

const Pricing = () => {
  return (
    <MainWrapper img={pricingImg}>
      <Header />
      <Section>
        <Container>
          <H1>Simple, Transparent Pricing</H1>
          <H2>Choose the plan that fits your travel style</H2>
          <br />
          <P>
            At WorldWise, we believe that tracking your travels should be easy
            and accessible to everyone — whether you're a weekend explorer or a
            full-time globetrotter. That’s why we offer straightforward pricing
            with no hidden fees.
          </P>
          <br />
          <P>
            🆓 Free Plan Perfect for casual travelers who want to keep track of
            their adventures. Add up to 10 locations Basic trip organization
            Interactive world map Mobile-friendly design 🚀 Pro Plan –
            $4.99/month For frequent travelers who want the full experience.
            Unlimited locations & trips Add travel notes, dates, and categories
            Priority updates & new feature access Early access to trip-sharing
            features
          </P>
          <br />
          <P>
            💼 Lifetime Plan – $49 (one-time) Own your travel history forever
            with a one-time payment. Everything in Pro No recurring payments VIP
            support
          </P>
        </Container>
      </Section>
    </MainWrapper>
  );
};
export default Pricing;
