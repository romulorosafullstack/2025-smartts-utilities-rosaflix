import styled from "styled-components";
import RosaflixWhite from "../assets/images/rosaflix_white.png";

const Header__Wrapper = styled.header`
  align-items: center;
  background-color: blue;
  display: flex;
  justify-content: center;
  height: 22rem;
  width: 100%;
`

const Header__Logo = styled.img`
  height: 15rem;
`

export function Header(){
  return(
    <Header__Wrapper>
      <Header__Logo src={RosaflixWhite} alt="Rosaflix Logo"/>
    </Header__Wrapper>
  )
}
