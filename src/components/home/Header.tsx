import { useLottie } from "lottie-react";
import homeBanner from "../../assets/Home-banner.json";
import { useTranslation } from "react-i18next";
import styled from "styled-components";


export const HeaderSection = styled.div`
  background: linear-gradient(0deg, #fbf5ef 0.09%, #f9f6ff 96.69%);
  display: flex;
  align-content: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const MidBox = styled.div`
    display: flex;
  align-content: flex-start;
  max-width: 85vw;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100vw;
    flex-direction: column;
  }
`
export const HeaderLeft = styled.div`
  padding-top: 90px;
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0;
    order: 1;
    padding-top: 0;
  }
  
`;
export const HeaderTitle = styled.h1`

  font-family: 'Inter-SemiBold';
  width: 36%;
  padding-left: 4%;
  box-sizing: border-box;

  &>div{
    min-width: 700px!important;
    box-sizing: content-box;
  }
  .Top1{
    font-weight: 600;
    margin-bottom: 32px;
    font-size: 60px;
    text-transform: uppercase;
  }
  .tips{
    font-size: 24px;
    display: flex;
    align-items: center;
    &>div{
      margin-right: 20px;
    }
  }
  //.cn{ padding-left: 120px;}

    
  //@media (max-width: 1024px) {
  //  font-size: 50px;
  //  max-width: 300px;
  //}
  @media (max-width: 768px) {
    text-align: center;
    margin-left: 0;
    text-transform: none;
    &>div{
      min-width: 90vw!important;
    }
    .Top1{
      font-weight: 600;
      margin-bottom: 32px;
      font-size: 32px;
      text-transform: uppercase;
    }
    .tips{
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      &>div{
        margin-right: 20px;
      }
    }
  }
`;
export const JoinButton = styled.button`
  border: none;
  background-color: #a6a2f9;
  color: #000;
  font-size: 20px;
  margin-left: 4%;
  font-family: 'DMSans-Bold';
  padding: 17px 46px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 40px;
  @media (max-width: 768px) {
    width:88%;
    margin-left: 0;
  }
`;

export const HeaderImg = styled.div`
  max-width: 63vw;
  margin-left: 20px;
  margin-inline: auto;
  flex-shrink: 0;
  @media (max-width: 768px) {
    max-width: 100vw;
    margin-left: 0;
  }

`;

const Header = () => {
  const options = {
    animationData: homeBanner,
    loop: true,
  };
  const { t,i18n } = useTranslation();

  const { View } = useLottie(options);
  return (
    <HeaderSection>
      {/* left side */}
        <MidBox>
            <HeaderLeft>
                <HeaderTitle>
                    <div className="Top1">{t("Home-title-home")}</div>
                    <div className="tips">
                        <div>{t("Home-title-home1")}</div>
                        <div className={i18n.language}>{t("Home-title-home2")}</div>
                        <div>{t("Home-title-home3")}</div>
                    </div>

                </HeaderTitle>
                <a href="https://app.seedao.xyz/sns" target="_blank" rel="noreferrer"><JoinButton>{t("Earn-Membership")}</JoinButton></a>

            </HeaderLeft>
            <HeaderImg>
                {/* <img src={View} alt="" /> */}
                {View}
            </HeaderImg>
        </MidBox>

    </HeaderSection>
  );
};

export default Header;
