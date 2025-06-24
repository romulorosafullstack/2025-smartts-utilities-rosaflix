import React from "react";
import styled from "styled-components";

const Main__Wrapper = styled.main`
  padding: 3rem 15rem;
  width: 100%;
`

const Main__Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
`

interface MainProps extends React.PropsWithChildren{
  title: string;
}

const Main: React.FC<MainProps> = ({title, children}) => {
  return(
    <Main__Wrapper>
      <Main__Title>{title}</Main__Title>
      {children}
    </Main__Wrapper>
  )
}

export default Main;
