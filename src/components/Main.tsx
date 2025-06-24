import { FormRegisterMovie } from "./FormRegisterMovie";
import Movie from "./Movie";


import styled from "styled-components";

const Main__Wrapper = styled.header`
  padding: 3rem 15rem;
  width: 100%;
`

export function Main(){
  return(
    <Main__Wrapper>
      <Movie title="Star Wars" year={1980} director="George Lucas" genre="Ficção" />
      <Movie title="Star Wars 2" year={1980} director="Spilberg" genre="Ficção" />
      <Movie title="Star Wars 3" year={1980} director="Stallone" genre="Ficção"/>
      <FormRegisterMovie />
    </Main__Wrapper>
  )
}
