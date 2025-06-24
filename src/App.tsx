import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CadastrarFilme from "./pages/CadastrarFilme/CadastrarFilme";


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
  justify-content: space-between;
  width: 100vw;
`

const App = () => {
  return (
    <App__Wrapper>
      <App__Container>
        <Header />
        <CadastrarFilme />
        <Footer />
      </App__Container>
    </App__Wrapper>
  )
}

export default App
