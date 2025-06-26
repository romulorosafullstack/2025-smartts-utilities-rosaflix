import styled from "styled-components";
import FooterLogos from "./sections/FooterLogos/FooterLogos";
import FooterMenu from "./sections/FooterMenu/FooterMenu";
import FooterNewsletter from "./sections/FooterNewsletter/FooterNewsletter";

const Footer__Wrapper = styled.footer`
  background-color: #2A7AE4;
  color: #FFF;
  display: flex;
  justify-content: center;
  width: 100%;
`

const Footer__Container = styled.div`
  align-items: center;
  background-color: #2A7AE4;
  color: #FFF;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  padding: 3.6rem 0;
  width: 100%;
  @media (min-width: 1140px) {
    flex-direction: row;
    height: 24rem;
    padding: 2.4rem 0;
    width: 113.4rem;
  }
`

const Footer = () => {
  return (
    <Footer__Wrapper>
      <Footer__Container>
        <FooterLogos />
        <FooterMenu />
        <FooterNewsletter />
      </Footer__Container>
    </Footer__Wrapper>
  )
}

export default Footer
