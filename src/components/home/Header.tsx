import {
  HeaderTitle,
  HeaderSection,
  HeaderImg,
  HeaderLeft,
  JoinButton,
} from "../../style/Header.style";
import img from "../../assets/home/header.png";

const Header = () => {
  return (
    <HeaderSection>
      {/* left side */}
      <HeaderLeft>
        <HeaderTitle>TOGETHER CREATE FREEDOM</HeaderTitle>
        <JoinButton>Join us</JoinButton>
      </HeaderLeft>
      {/* right side */}
      <HeaderImg>
        <img src={img} alt="" />
      </HeaderImg>
    </HeaderSection>
  );
};

export default Header;
