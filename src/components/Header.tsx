import styled from "styled-components";
import RosaflixWhite from "../assets/images/rosaflix_white.png";

const Header__Wrapper = styled.header`
  align-items: center;
  background-color: blue;
  display: flex;
  justify-content: center;
  height: 30rem;
  width: 100%;
`

export function Header(){
  return(
    <Header__Wrapper>
        <img src={RosaflixWhite} alt="Rosaflix Logo" />
    </Header__Wrapper>
  )
}
