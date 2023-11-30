import {
  HeaderTitle,
  HeaderSection,
  HeaderImg,
  HeaderLeft,
  JoinButton,
} from "../../style/Header.style";
import img from "../../assets/home/header.png";
import { useLottie } from "lottie-react";
import homeBanner from "../../assets/Home banner.json";
import { useTranslation } from "react-i18next";

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
      <HeaderLeft>
        <HeaderTitle>{t("Home-title")}</HeaderTitle>
        <JoinButton>{t("Earn-Membership")}</JoinButton>
      </HeaderLeft>
      {/* right side */}
      <HeaderImg>
        {/* <img src={View} alt="" /> */}
        {View}
      </HeaderImg>
    </HeaderSection>
  );
};

export default Header;
