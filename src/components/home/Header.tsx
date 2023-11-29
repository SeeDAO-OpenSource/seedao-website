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

const Header = () => {
  const options = {
    animationData: homeBanner,
    loop: true,
  };

  const { View } = useLottie(options);
  return (
    <HeaderSection>
      {/* left side */}
      <HeaderLeft>
        <HeaderTitle>TOGETHER CREATE FREEDOM</HeaderTitle>
        <JoinButton>Join us</JoinButton>
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
