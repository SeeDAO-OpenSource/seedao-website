import buildBanner from "../../assets/build/build-banner.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BuildHeader = () => {
  const { t } = useTranslation();
  return (
    <JourneyHeaderContainer>
      <JourneyTitle>
        <h1>{t("Build")}</h1>
        <h2>{t("Build-Content-1")}</h2>
      </JourneyTitle>
      <JourneyLogo>
        <img src={buildBanner} alt="" />
      </JourneyLogo>
    </JourneyHeaderContainer>
  );
};

export default BuildHeader;

const JourneyHeaderContainer = styled.div`
  /* padding-top: 45px; */
  display: flex;
  /* @media (max-width: 1024px) {
    margin-bottom: 60px;
  } */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 16px;
  }
`;
const JourneyTitle = styled.div`
  width: 34%;
  padding-top: 100px;
  padding-left: 60px;
  h2 {
    max-width: 590px;
  }

  h1 {
    font-size: 48px;
    font-weight: 500;
  }
  h2 {
    position: absolute;
    font-size: 40px;
    margin-top: 42px;
    font-weight: 500;
  }
  @media (max-width: 1024px) {
    padding-left: 40px;
    padding-top: 20px;
    /* h2 {
      position: relative;
    } */
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-left: 0;
    padding-top: 30px;
    h1 {
      font-size: 28px;
      margin: 26px 0;
    }
    h2 {
      font-size: 28px;
      max-width: 80%;
      margin: 0 auto;
      position: relative;
    }
  }
`;
const JourneyLogo = styled.div``;
