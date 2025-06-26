
import styled from "styled-components";

const Menu__Conteiner = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  @media (min-width: 1140px) {
    width: 50%
  }
`

const Menu__List = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`

const Menu__Item = styled.li`
  color: #FFF;
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  height: 2rem;
  justify-content: flex-start;
  @media (min-width: 768px) {
    align-items: flex-start;
    cursor: pointer;
    font-size: 1.4rem;
    justify-content: flex-start;
    text-align: left;
  }
`

const FooterMenu = () => {
  return (
    <Menu__Conteiner>
      <Menu__List>
        <Menu__Item>Quem somos nós</Menu__Item>
        <Menu__Item>Política de privacidade</Menu__Item>
        <Menu__Item>Programa fidelidade</Menu__Item>
        <Menu__Item>Nossas lojas</Menu__Item>
        <Menu__Item>Quero ser franqueado</Menu__Item>
        <Menu__Item>Anuncie aqui</Menu__Item>
      </Menu__List>
    </Menu__Conteiner>
  )
}

export default FooterMenu
