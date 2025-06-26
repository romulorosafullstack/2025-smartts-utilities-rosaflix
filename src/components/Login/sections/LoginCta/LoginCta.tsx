import styled from "styled-components";


const Cta__Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
`

const Cta__Text = styled.p`
  color: #FFF;
  font-size: 1.2rem;
  font-weight: 700;
`


const LoginCta = () => {
  return (
    <Cta__Wrapper>
      <Cta__Text>Entrar com:</Cta__Text>
    </Cta__Wrapper>

  )
}

export default LoginCta
