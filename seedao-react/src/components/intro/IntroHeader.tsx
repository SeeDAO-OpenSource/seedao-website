import {
  IntroHeaderSection,
  IntroTitle,
  IntroLogo,
} from "../../style/IntroHeader.style";
import introLogo from "../../assets/intro/Intro-Banner.svg";

const IntroHeader = () => {
  return (
    <IntroHeaderSection>
      <IntroTitle>
        <h1>INTRO</h1>
        <h2>
          SEEDAO is a digital city-state, a decentralized, autonomous world for
          the pursuit of the "good life".
        </h2>
      </IntroTitle>
      <IntroLogo>
        <img src={introLogo} alt="" />
      </IntroLogo>
    </IntroHeaderSection>
  );
};

export default IntroHeader;
