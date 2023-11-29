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
import Rectangle1284 from "../../assets/footer/Rectangle 1284.svg";
import Rectangle1285 from "../../assets/footer/Rectangle 1285.svg";
import Group from "../../assets/footer/Group.svg";
import Rectangle1286 from "../../assets/footer/Rectangle 1286.svg";
import twitter from "../../assets/footer/twitter.svg";
import Dis from "../../assets/footer/Dis.svg";
import notion from "../../assets/footer/Notion.svg";
import Opensee from "../../assets/footer/Opensee.svg";
import Tg from "../../assets/footer/Tg.svg";
import mi from "../../assets/footer/Mi.svg";
import mail from "../../assets/footer/mail.svg";

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <PartnersContainer>
          <PartnerTitle>PARTNERS</PartnerTitle>
          <Partners>
            {/* <Logo1 src={image3} /> */}
            <Logo1>
              <img src={image3} alt="" />
            </Logo1>
            <Logo2>
              <img src={Rectangle677} alt="" />
            </Logo2>
            <Logo3>
              <img src={image5} alt="" />
            </Logo3>
            <Logo4>
              <img src={image6} alt="" />
            </Logo4>
          </Partners>
          <Partners>
            <Logo5>
              <img src={image7} alt="" />
            </Logo5>
            <Logo6>
              <img src={image8} alt="" />
            </Logo6>
            <Logo7>
              <img src={image9} alt="" />
            </Logo7>
            <Logo8>
              <img src={image10} alt="" />
            </Logo8>
          </Partners>
          <Partner>
            <Logo9>
              <img src={image11} alt="" />
            </Logo9>
            <Logo10>
              <img src={image12} alt="" />
            </Logo10>
          </Partner>
          {/* portfolio section */}
          <PortfolioTitle>PORTFOLIO</PortfolioTitle>
          <Portfolio>
            <Logo11>
              <img src={image13} alt="" />
            </Logo11>
            <Logo12>
              <img src={daolinkLogo} alt="" />
            </Logo12>
            <Logo13>
              <img src={未标题} alt="" />
            </Logo13>
            <Logo14>
              <img src={Rectangle} alt="" />
            </Logo14>
            <Logo15>
              <img src={Vector} alt="" />
            </Logo15>
          </Portfolio>
          <Portfolio>
            <Logo16>
              <img src={Rectangle1283} alt="" />
            </Logo16>
            <Logo17>
              <img src={Rectangle1284} alt="" />
            </Logo17>
            <Logo18>
              <img src={Rectangle1285} alt="" />
            </Logo18>
            <Logo19>
              <img src={Group} alt="" />
            </Logo19>
            <Logo20>
              <img src={Rectangle1286} alt="" />
            </Logo20>
          </Portfolio>
        </PartnersContainer>
        <Cooperation>
          <h5>COOPERATION APPLICATION</h5>
          <p>Application for SeeDAO Cooperation</p>
          <h6>Incubator Cooperation</h6>
          <p>Bug Reporting</p>
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </Cooperation>
        <SocialMedia>
          <h5>SEEDAO SOCIAL MEDIA</h5>
          <SocialLinks>
            <SocialLink href="#">
              <img src={twitter} alt="" />
            </SocialLink>
            <SocialLink href="#">
              <img src={Dis} alt="" />
            </SocialLink>
            <SocialLink href="#">
              <img src={notion} alt="" />
            </SocialLink>
            <SocialLink href="#">
              <img src={Opensee} alt="" />
            </SocialLink>
            <SocialLink href="#">
              <img src={Tg} alt="" />
            </SocialLink>
            {/* </SocialLinks> */}
            {/* <SocialLinks> */}
            <SocialLink href="#">
              <img src={mi} alt="" />
            </SocialLink>
            <SocialLink href="#">
              <img src={mail} alt="" />
            </SocialLink>
          </SocialLinks>
          <p>© 2023 SeeDAO. All Rights Reserved.</p>
        </SocialMedia>
      </FooterSection>
    </Container>
  );
};

export default Footer;
const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin: 42px 60px;
  color: #b0aca7;
  opacity: 0.8;
  padding-top: 100px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 10px 10px;
  }
`;
const PartnersContainer = styled.div`
  @media (max-width: 768px) {
    /* text-align: center; */
  }
  /* width: 33%; */
`;
const PartnerTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 0 4px;
  padding-bottom: 14px;
`;
const PortfolioTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 14px 4px;
  margin-top: 30px;
`;
const Partners = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  /* &:last-child {
    justify-content: flex-start;
    gap: 22px;
    border: 1px solid red;
  } */
`;
const Partner = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
`;
const Logo1 = styled.div`
  img {
    max-width: 53px;
  }
`;
const Logo2 = styled.div`
  img {
    max-width: 74px;
  }
`;
const Logo3 = styled.div`
  img {
    max-width: 105px;
  }
`;
const Logo4 = styled.div`
  img {
    max-width: 84px;
  }
`;

const Logo5 = styled.div`
  img {
    max-width: 65px;
  }
`;
const Logo6 = styled.div`
  img {
    max-width: 91px;
  }
`;
const Logo7 = styled.div`
  img {
    max-width: 45px;
  }
`;
const Logo8 = styled.div`
  img {
    max-width: 76px;
  }
`;
const Logo9 = styled.div`
  img {
    max-width: 76px;
  }
`;
const Logo10 = styled.div`
  img {
    max-width: 76px;
  }
`;

// portfolio
const Portfolio = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
const Logo11 = styled.div`
  img {
    max-width: 73px;
  }
`;
const Logo12 = styled.div`
  img {
    max-width: 24px;
  }
`;
const Logo13 = styled.div`
  img {
    max-width: 87px;
  }
`;
const Logo14 = styled.div`
  img {
    max-width: 31px;
  }
`;
const Logo15 = styled.div`
  img {
    max-width: 28px;
  }
`;
const Logo16 = styled.div`
  img {
    max-width: 61px;
  }
`;
const Logo17 = styled.div`
  img {
    max-width: 31px;
  }
`;
const Logo18 = styled.div`
  img {
    max-width: 113px;
  }
`;
const Logo19 = styled.div`
  img {
    max-width: 33px;
  }
`;
const Logo20 = styled.div`
  img {
    max-width: 69px;
  }
`;

const Cooperation = styled.div`
  /* width: 33%; */
  line-height: 40px;
  padding: 0 14px;
  h5 {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
  h6 {
    color: #000;
    font-size: 16px;
    font-weight: 400;
  }
`;
const SocialMedia = styled.div`
  /* width: 33%; */
  position: relative;
  h5 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  p {
    position: absolute;
    bottom: 0;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    h5 {
      margin-bottom: 10px;
    }
    p {
      position: relative;
      margin: 40px;
    }
  }
`;
const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 10px 0;
  max-width: 310px;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%;
  }
`;

const SocialLink = styled.a`
  img {
    max-width: 36px;
  }
`;
