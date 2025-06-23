import styled from 'styled-components';
import logo from '../assets/logo.png';
const StyledLogo = styled.img`
  height: 4.5rem;
  width: auto;
  cursor: pointer;
   @media (max-width: 768px) {
    height: 3.5rem;
  }
   @media (max-width: 600px) {
    height: 2.5rem;
  }
`;

const LogoImage = () => {
  return (
    <StyledLogo src={logo} alt="WorldWise Logo" />
  )
}
export default LogoImage