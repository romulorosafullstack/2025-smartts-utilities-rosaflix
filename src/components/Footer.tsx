import styled from "styled-components";
import RosaflixWhite from "../assets/images/rosaflix_white.png";
import SmarttsLogo from "../assets/images/smartt-utilities-brand.png";

const Footer__Wrapper = styled.footer`
  align-items: center;
  background-color: blue;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Footer__Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
  width: 192rem;
`

const Copyright__Wrapper = styled.div`
  align-items: center;
  color: #FFF;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`

const BrandDevelopment__Wrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 3rem;
  justify-content: flex-start;
`

const Development__Container = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`

const Brand__Container = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  justify-content: flex-start;
`

const Footer__Title = styled.h4`
color: #FFF;
  font-size: 1.2rem;
  font-weight: 700;
`

const Copyright__Text = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
`


export function Footer(){
  return(
    <Footer__Wrapper>
      <Footer__Container>
        <Copyright__Wrapper>
          <img src={RosaflixWhite} alt="Rosaflix Logo" height="30px"/>
          <Copyright__Text>&copy;2025 Todos os direitos reservados.</Copyright__Text>
        </Copyright__Wrapper>

        <BrandDevelopment__Wrapper>
          <Development__Container>
            <Footer__Title>Desenvolvimento:</Footer__Title>
            <img src={SmarttsLogo} alt="Smartts Utilities Logo" width="100%" height="70rem"/>
          </Development__Container>
          <Brand__Container>
            <Footer__Title>Tecnologia:</Footer__Title>
            <img src={SmarttsLogo} alt="Smartts Utilities Logo" width="100%" height="70rem"/>
          </Brand__Container>
        </BrandDevelopment__Wrapper>
      </Footer__Container>
    </Footer__Wrapper>
  )
}
