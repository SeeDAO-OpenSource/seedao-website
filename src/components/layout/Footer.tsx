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
import {
  CLink,
  Cooperation,
  CooperationTitle,
  FooterContainer,
  FooterSection,
  Incubator,
  Logo1,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo2,
  Logo20,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Partner,
  PartnerTitle,
  Partners,
  PartnersContainer,
  Portfolio,
  PortfolioTitle,
  SocialLink,
  SocialLinks,
  SocialMedia,
} from "../../style/Footer.style";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <FooterSection>
        <PartnersContainer>
          <PartnerTitle>{t("Partners")}</PartnerTitle>
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
          <CooperationTitle>{t("Cooperation-Application")}</CooperationTitle>
          <CLink
            href="https://tally.so/r/wLzvRG"
            target="_blank"
            rel="noreferrer"
          >
            {t("City-Hall-Cooperation")}
          </CLink>
          <Incubator
            href="https://tally.so/r/wAr0Q0"
            target="_blank"
            rel="noreferrer"
          >
            {t("Incubator-Cooperation")}
          </Incubator>
          <CLink
            href="https://tally.so/r/nG6vRj"
            target="_blank"
            rel="noreferrer"
          >
            {t("Bug-Reporting")}
          </CLink>
          <CLink href="https://seedao.xyz/tos" target="_blank" rel="noreferrer">
            {t("Terms-of-Services")}
          </CLink>
          <CLink
            href="https://seedao.xyz/privacy"
            target="_blank"
            rel="noreferrer"
          >
            {t("Privacy-Policy")}
          </CLink>
        </Cooperation>
        <SocialMedia>
          <h5>{t("Social-medial")}</h5>
          <SocialLinks>
            <SocialLink
              href="https://twitter.com/see_dao"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="" />
            </SocialLink>
            <SocialLink
              href="https://discord.gg/seedao-xyz"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Dis} alt="" />
            </SocialLink>
            <SocialLink
              href="https://seedao.notion.site/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={notion} alt="" />
            </SocialLink>
            <SocialLink
              href="https://opensea.io/collection/seedaoseed"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Opensee} alt="" />
            </SocialLink>
            <SocialLink
              href="https://t.me/theseedao"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Tg} alt="" />
            </SocialLink>
            {/* </SocialLinks> */}
            {/* <SocialLinks> */}
            <SocialLink
              href="https://mirror.xyz/seedao.eth"
              target="_blank"
              rel="noreferrer"
            >
              <img src={mi} alt="" />
            </SocialLink>
            <SocialLink href="">
              <img src={mail} alt="" />
            </SocialLink>
          </SocialLinks>
          <p>© 2023 SeeDAO. All Rights Reserved.</p>
        </SocialMedia>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
