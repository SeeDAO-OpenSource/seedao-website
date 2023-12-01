import IntroDetail from "../components/intro/IntroDetail";
import IntroHeader from "../components/intro/IntroHeader";
import IntroList from "../components/intro/IntroList";
import styled from "styled-components";

const Intro = () => {
  return (
    <IntroSection>
      <div>
        <IntroHeader />
        <IntroDetail />
        <IntroList />
      </div>
    </IntroSection>
  );
};

export default Intro;

const IntroSection = styled.section`

`;
