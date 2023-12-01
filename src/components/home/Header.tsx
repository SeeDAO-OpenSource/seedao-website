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
  font-size: 82px;
  font-family: 'Inter-SemiBold';
  width: 36%;
  padding-left: 4%;
  box-sizing: border-box;
  font-weight: 600;
  margin-bottom: 32px;
  text-transform: uppercase;
  //@media (max-width: 1024px) {
  //  font-size: 50px;
  //  max-width: 300px;
  //}
  @media (max-width: 768px) {
    text-align: center;
    font-size: 64px;
    margin-left: 0;
    text-transform: none;
    width: 100%;
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
  const { t } = useTranslation();

  const { View } = useLottie(options);
  return (
    <HeaderSection>
      {/* left side */}
        <MidBox>
            <HeaderLeft>
                <HeaderTitle>{t("Home-title")}</HeaderTitle>
                <JoinButton>{t("Earn-Membership")}</JoinButton>
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
