import Logo from "../../assets/images/rosaflix_white_small.png";

import styled from "styled-components";

const Header__Wrapper = styled.header`
  background-color: #2A7AE4;
  color: #FFF;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Header__Container = styled.div`
  align-items: center;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  padding: 1.2rem;
  width: 100%;
  @media (min-width: 1140px) {
    border: 2px solid green;
    padding: 2.4rem 0;
    width: 113.4rem;
  }
`

const Header__LogoInput = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
  height: 4rem;
  @media (min-width: 768px) {
    gap: 4rem;
  }
`

const Header__Logo = styled.img`
  height: 2.4rem;
  width: auto;
  @media (min-width: 768px) {
    height: 4rem;
  }
`

const Header__Search = styled.input`
  align-items: center;
  background-color: #F5F5F5;
  border: none;
  border-radius: 1.4rem;
  color: #272727;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-start;
  height: 3rem;
  padding: 0.8rem 1.6rem;
  width: 20rem;
  @media (min-width: 768px) {
    border-radius: 2rem;
    font-size: 1.4rem;
    height: 4rem;
    width: 39rem;
  }
`

const Header__Login = styled.button`
  background-color:  #2A7AE4;
  border: 1px solid #FFF;
  color: #FFF;
  font-size: 1.1rem;
  font-weight: 700;
  height: 3rem;
  text-transform: uppercase;
  width: 8rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
    height: 5.2rem;
    width: 18.2rem;
    transition: all .4s ease-in-out;
    &:hover,
    &:focus {
      background-color:  #4a95f7;
      transform: scale(1.1);
    }
  }
`

const Header = () => {
  return (
    <Header__Wrapper>
      <Header__Container>
        <Header__LogoInput>
          <Header__Logo src={Logo} alt="Rosaflix Logo" />
          <Header__Search type="text" placeholder="Qual filme deseja assistir?"/>
        </Header__LogoInput>
        <Header__Login>Login</Header__Login>
      </Header__Container>
    </Header__Wrapper>
  )
}

export default Header
