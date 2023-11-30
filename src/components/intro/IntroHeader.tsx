import {
  IntroHeaderSection,
  IntroTitle,
  IntroLogo,
} from "../../style/IntroHeader.style";
import introLogo from "../../assets/intro/Intro-Banner.svg";
import { useTranslation } from "react-i18next";

const IntroHeader = () => {
  const { t } = useTranslation();
  return (
    <IntroHeaderSection>
      <IntroTitle>
        <h1>{t("Intro")}</h1>
        <h2>{t("Intro-Content-1")}</h2>
      </IntroTitle>
      <IntroLogo>
        <img src={introLogo} alt="" />
      </IntroLogo>
    </IntroHeaderSection>
  );
};

export default IntroHeader;
