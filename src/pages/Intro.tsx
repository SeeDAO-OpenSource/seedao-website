import IntroDetail from "../components/intro/IntroDetail";
import IntroHeader from "../components/intro/IntroHeader";
import IntroList from "../components/intro/IntroList";
import { Container } from "../style/Global.style";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntroSection>
      <Container>
        <IntroHeader />
        {/* intro details */}
        <IntroDetail />
        {/* intro details end */}
        <IntroList />
      </Container>
    </IntroSection>
  );
};

export default Intro;

const IntroSection = styled.section`
  background: linear-gradient(180deg, #e0deff 0%, #fbf5ef 100%);
`;
