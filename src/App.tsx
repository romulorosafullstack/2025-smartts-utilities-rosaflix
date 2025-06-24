import styled from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App__Wrapper = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`

const App__Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100vw;
`


export default function App() {
  return (
    <App__Wrapper>
      <App__Container>
        <Header />
        <Main />
        <Footer />
      </App__Container>
    </App__Wrapper>
  )
}
