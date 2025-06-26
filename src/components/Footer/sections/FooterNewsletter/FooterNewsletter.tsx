import styled from "styled-components";

const Newsletter__Wrapper = styled.section`
  border: 2px solid yellow;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 1140px) {
    padding: 0;
    width: 50%;
  }
`

const Newsletter__Container = styled.div`
  width: 100%;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
`

const FooterNewsletter = () => {
  return (
    <Newsletter__Wrapper>
      <Newsletter__Container>
      </Newsletter__Container>
    </Newsletter__Wrapper>
  )
}

export default FooterNewsletter
