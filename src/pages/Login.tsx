import styled from "styled-components";
import LoginButton from "../components/Login/sections/LoginButton/LoginButton";
import LoginCta from "../components/Login/sections/LoginCta/LoginCta";
import LoginLogo from "../components/Login/sections/LoginLogo/LoginLogo";

const Login__Wrapper = styled.section`
  align-items: center;
  background-color: #2A7AE4;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100vh;
`

const Login__Container = styled.section`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 2rem;
  width: 48rem;
`


const Login = () => {
  return (
    <Login__Wrapper>
      <Login__Container>
        <LoginLogo />
        <LoginCta />
        <LoginButton />
      </Login__Container>
    </Login__Wrapper>

  )
}

export default Login
