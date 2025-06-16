import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%);
  color: #fff;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 6rem;
  margin-bottom: 0.5rem;
  font-weight: 900;
  letter-spacing: 0.15em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  max-width: 400px;
  line-height: 1.4;
`;

const MapEmoji = styled.div`
  font-size: 14rem;
  margin-bottom: 2rem;
`;

 

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <MapEmoji>🗺️</MapEmoji>
      <Title>404</Title>
      <Subtitle>
        Oops! Looks like this destination doesn’t exist. Maybe try a new route?
      </Subtitle>
      <Button onClick={() => navigate(-1)}>&larr; back</Button>
    </Container>
  );
};

export default NotFound;
