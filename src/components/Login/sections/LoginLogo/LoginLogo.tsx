import styled from "styled-components";
import LogoSmartts from "../../../../assets/images/rosaflix_white_small.png";

const Logo__Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Login__Brand = styled.img`
  height: 4rem;
  margin-bottom: 6rem;
  width: auto;
  @media (min-width: 768px) {
    height: 5rem;
  }
`

const LoginLogo = () => {
  return (
    <Logo__Wrapper>
      <Login__Brand src={LogoSmartts} alt="Rosaflix Logo" />
    </Logo__Wrapper>
  )
}

export default LoginLogo
