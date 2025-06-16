import styled from 'styled-components';
import logo from '../assets/logo.png';
const StyledLogo = styled.img`
  height: 4.5rem;
  width: auto;
  cursor: pointer;
`;

const LogoImage = () => {
  return (
    <StyledLogo src={logo} alt="WorldWise Logo" />
  )
}
export default LogoImage