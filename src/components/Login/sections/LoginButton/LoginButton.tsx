import styled from "styled-components";

const Button__Wrapper = styled.button`
  align-items: center;
  border: #FFF;
  border-radius: 0.5rem;
  color: #777;
  display: flex;
  font-size: 1.4rem;
  font-weight: 700;
  height: 3.6rem;
  justify-content: center;
  text-transform: uppercase;
  width: 20rem;
  @media (min-width: 768px) {
    cursor: pointer;
  }
`

const LoginButton = () => {
  return (
    <Button__Wrapper>
      Google
    </Button__Wrapper>
  )
}

export default LoginButton
