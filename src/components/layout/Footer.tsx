import styled from "styled-components";
import { Container } from "../../style/Global.style";
import image3 from "../../assets/footer/image 3.svg";
import Rectangle677 from "../../assets/footer/Rectangle 677.svg";
import image5 from "../../assets/footer/image 5.svg";
import image6 from "../../assets/footer/image 6.svg";
import image7 from "../../assets/footer/image 7.svg";
import image8 from "../../assets/footer/image 8.svg";
import image9 from "../../assets/footer/image 9.svg";
import image10 from "../../assets/footer/image 10.svg";
import image11 from "../../assets/footer/image 11.svg";
import image12 from "../../assets/footer/image 12.svg";
import image13 from "../../assets/footer/image 13.svg";
import daolinkLogo from "../../assets/footer/daolink-logo.svg";
import 未标题 from "../../assets/footer/未标题-1 1.svg";
import Rectangle from "../../assets/footer/Rectangle.svg";
import Vector from "../../assets/footer/Vector.svg";
import Rectangle1283 from "../../assets/footer/Rectangle 1283.svg";
import Rectangle1285 from "../../assets/footer/Rectangle 1285.svg";
import Group from "../../assets/footer/Group.svg";
import Rectangle1286 from "../../assets/footer/Rectangle 1286.svg";
import twitter from "../../assets/footer/twitter.svg";
import Dis from "../../assets/footer/Dis.svg";
import Notion from "../../assets/footer/Notion.svg";
import Opensee from "../../assets/footer/Opensee.svg";
import Tg from "../../assets/footer/Tg.svg";

const partnersData = [
  {
    image: image3,
  },
  {
    image: Rectangle677,
  },
  {
    image: image5,
  },
  {
    image: image6,
  },
  {
    image: image7,
  },
  {
    image: image8,
  },
  {
    image: image9,
  },
  {
    image: image10,
  },
  {
    image: image11,
  },
  {
    image: image12,
  },
];

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <Partners>
          {partnersData.map((partner) => (
            <li>
              <img src={partner.image} alt="" />
            </li>
          ))}
        </Partners>
        <Cooperation></Cooperation>
        <SocialMedia></SocialMedia>
      </FooterSection>
    </Container>
  );
};

export default Footer;

const FooterSection = styled.div``;
const Partners = styled.div``;
const Cooperation = styled.div``;
const SocialMedia = styled.div``;
