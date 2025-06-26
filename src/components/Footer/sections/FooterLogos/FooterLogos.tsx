
import styled from "styled-components";
import LogoRosaflix from "../../../../assets/images/rosaflix_white_small.png";
import LogoSmartts from "../../../../assets/images/smartt-utilities-brand.png";

const Logo__Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  @media (min-width: 1140px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
    width: 50%;
  }
`

const Logo__Rosaflix = styled.img`
  height: 2rem;
  @media (min-width: 1140px) {
    height: 2rem;
  }
`

const Logo__Smartts = styled.img`
  height: 8rem;
  @media (min-width: 1140px) {
    height: 6rem;
  }
`

const FooterLogos = () => {
  return (
    <Logo__Conteiner>
      <Logo__Rosaflix src={LogoRosaflix} alt="Rosaflix" />
      <Logo__Smartts src={LogoSmartts} alt="Smartts Utilities" />
    </Logo__Conteiner>
  )
}

export default FooterLogos
