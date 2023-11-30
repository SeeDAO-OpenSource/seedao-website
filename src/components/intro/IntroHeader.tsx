import introLogo from "../../assets/intro/Intro-Banner.svg";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const IntroHeaderSection = styled.div`
  background: linear-gradient(180deg, #e0deff 0%, #fbf5ef 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  //@media (max-width: 768px) {
  //  display: flex;
  //  flex-direction: column-reverse;
  //  padding: 30px 20px;
  //}
`;

const CenterBox = styled.div`
    display: flex;
  align-content: center;
  justify-content: space-between;
  background: url(${introLogo}) no-repeat 100% center;
`
export const IntroTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 140px 106px 217px 10vw;
  width: 40%;
  flex-shrink: 0;
  font-family: 'Inter-Medium';
  .h1 {
    font-size: 32px;

    font-weight: 500;
    text-transform: uppercase;
  }
  .h2 {
    font-size: 40px;
    
    margin-top: 42px;
    font-weight: 500;
    line-height: 51px;
  }
  //
  //@media (max-width: 1024px) {
  //  h2 {
  //    font-size: 28px;
  //    max-width: 650px;
  //  }
  //}
  //@media (max-width: 768px) {
  //  width: 100%;
  //  text-align: center;
  //  h1 {
  //    margin-top: 30px;
  //    font-size: 28px;
  //  }
  //  h2 {
  //    font-size: 28px;
  //  }
  //}
`;
export const IntroLogo = styled.div`
  //@media (max-width: 768px) {
  //  width: 100%;
  //}
  /* padding-right: 164px; */
`;

const IntroHeader = () => {
  const { t } = useTranslation();
  return (
    <IntroHeaderSection>
        <CenterBox>
            <IntroTitle>
                <div className="h1">{t("Intro")}</div>
                <div className="h2">{t("Intro-Content-1")}</div>
            </IntroTitle>
            {/*<IntroLogo>*/}
            {/*    <img src={introLogo} alt="" />*/}
            {/*</IntroLogo>*/}
        </CenterBox>

    </IntroHeaderSection>
  );
};

export default IntroHeader;
