import image3 from "../../assets/footer/y2z.svg";
import hashkey from "../../assets/footer/hashkey.svg";
import image5 from "../../assets/footer/image-5.svg";
import image6 from "../../assets/footer/image-6.svg";
import image7 from "../../assets/footer/image-7.svg";
import image8 from "../../assets/footer/image-8.svg";
import image9 from "../../assets/footer/image-9.svg";
import image10 from "../../assets/footer/image-10.svg";
import image11 from "../../assets/footer/image-11.svg";
import image12 from "../../assets/footer/image-12.svg";
import image13 from "../../assets/footer/image-13.svg";
import daolinkLogo from "../../assets/footer/daolink-logo.svg";
import deschool from "../../assets/footer/deschool.svg";
import Rectangle from "../../assets/footer/Rectangle.svg";
import Vector from "../../assets/footer/Vector.svg";
import Rectangle1283 from "../../assets/footer/Rectangle-1283.svg";
import Rectangle1284 from "../../assets/footer/Rectangle-1284.svg";
import Rectangle1285 from "../../assets/footer/Rectangle-1285.svg";
import Group from "../../assets/footer/Group.svg";
import Rectangle1286 from "../../assets/footer/Rectangle-1286.svg";

import { useTranslation } from "react-i18next";
import styled from "styled-components";

import twitter from "../../assets/footer/twitter.png";
import TwitterHover from "../../assets/footer/hover/twitter.png";
import Dis from "../../assets/footer/Dis.png";
import DisHover from "../../assets/footer/hover/Dis.png";
import notion from "../../assets/footer/Notion.png";
import notionHover from "../../assets/footer/hover/Notion.png";
import Opensee from "../../assets/footer/Opensee.png";
import OpenseeHover from "../../assets/footer/hover/Opensee.png";
import Tg from "../../assets/footer/Tg.png";
import TgHover from "../../assets/footer/hover/Tg.png";
import mi from "../../assets/footer/Mi.png";
import miHover from "../../assets/footer/hover/Mi.png";
import mail from "../../assets/footer/mail.svg";
import mailHover from "../../assets/footer/hover/message.png";

import {Link} from "react-router-dom"

export const FooterContainer = styled.section`
  z-index: 1;
  margin: 20px auto;
  
  padding: 50px 0 54px 7vw;
  border-top: 1px solid rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 0;
    border-top: 0;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  /* margin: 48px 60px; */
  color: #b0aca7;
  opacity: 0.8;
  &>li{
    width: 33.3333333%;
    display: flex;
    justify-content: center;
    position: relative;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 20px; */
    justify-content: center;
    text-align: center;
    margin: 0;
    padding: 40px 13px;
    &>li{
      width:100%;
    }
  }
`;
export const PartnersContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    /* text-align: center; */
  }
  /* width: 33%; */
`;
export const PartnerTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 23px;
  font-family: 'DMSans-Bold';
  text-transform: uppercase;
`;
export const PortfolioTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 14px 4px;
  margin-top: 30px;
`;
export const Partners = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  max-width: 450px;
  li{
    margin:0 20px 20px 0;
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    max-width: 100vw;
    justify-content: center;
    li{
      margin:0 12px 20px 0;
      flex-shrink: 0;
    }
  }
`;

// portfolio
export const Portfolio = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  max-width: 450px;
  li{
    margin:0 13px 20px 0;
    flex-shrink: 0;
  }
  @media (max-width: 768px) {
    max-width: 100vw;
    justify-content: center;
    li{
      margin:0 8px 20px 0;
      flex-shrink: 0;
    }
  }
`;

export const Cooperation = styled.div`
  /* width: 33%; */
  line-height: 40px;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  min-width: 280px;
  a{
    font-size: 16px;
    font-weight: 400;
    color: #b0aca7;
    text-decoration: none;
    
    &:hover{
      color: #000;
    }
  }
  @media (max-width: 768px) {
    margin-top: 35px;
  }
`;
export const CooperationTitle = styled.h6`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 20px;
  font-family: 'DMSans-Bold';
  text-transform: uppercase;
`;
export const SocialMedia = styled.div`
  /* width: 33%; */
  h5 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 40px;
    font-family: 'DMSans-Bold';
    text-transform: uppercase;
  }
  .btmBox {
    position: absolute;
    bottom: 16px;
    color: #000000;
    font-weight: 400;
  }
  .powerby{
    color: #b0aca7;
    text-align: right;
    margin-top: 10px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    h5 {
      margin-bottom: 20px;
      margin-top: 22px;
    }
    .btmBox {
      position: relative;
      margin-top: 40px;
      padding-top: 20px;
      bottom: 0;
    }
    .powerby{
      text-align: center;
    }
  }
`;
export const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 310px;
  img {
    max-width: 36px;
  }
  a{
    .hover{
      display: none;
    }
    .nor{
      display: inline-block;
    }
    &:hover{
      .hover{
        display: inline-block;
      }
      .nor{
        display: none;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 100%;
    gap:10px
  }
  
`;

const Footer = () => {
  const { t } = useTranslation();
  return (
    <FooterContainer>
      <FooterSection>
        <li><PartnersContainer>
          <PartnerTitle>{t("Partners")}</PartnerTitle>
          <Partners>
            {/* <Logo1 src={image3} /> */}
            <li>
              <img src={image3} alt="" />
            </li>
            <li>
              <img src={hashkey} alt="" />
            </li>
            <li>
              <img src={image5} alt="" />
            </li>
            <li>
              <img src={image6} alt="" />
            </li>
            <li>
              <img src={image7} alt="" />
            </li>
            <li>
              <img src={image8} alt="" />
            </li>
            <li>
              <img src={image9} alt="" />
            </li>
            <li>
              <img src={image10} alt="" />
            </li>
            <li>
              <img src={image11} alt="" />
            </li>
            <li>
              <img src={image12} alt="" />
            </li>
          </Partners>
          {/* portfolio section */}
          <PortfolioTitle>{t("Our-Portfolio")}</PortfolioTitle>
          <Portfolio>
            <li>
              <img src={image13} alt="" />
            </li>
            <li>
              <img src={daolinkLogo} alt="" />
            </li>
            <li>
              <img src={deschool} alt="" />
            </li>
            <li>
              <img src={Rectangle} alt="" />
            </li>
            <li>
              <img src={Vector} alt="" />
            </li>
            <li>
              <img src={Rectangle1283} alt="" />
            </li>
            <li>
              <img src={Rectangle1284} alt="" />
            </li>
            <li>
              <img src={Rectangle1285} alt="" />
            </li>
            <li>
              <img src={Group} alt="" />
            </li>
            <li>
              <img src={Rectangle1286} alt="" />
            </li>
          </Portfolio>
        </PartnersContainer></li>
        <li><Cooperation>
          <CooperationTitle>{t("Cooperation-Application")}</CooperationTitle>
          <a
              href="https://tally.so/r/wLzvRG"
              target="_blank"
              rel="noreferrer"
          >
            {t("City-Hall-Cooperation")}
          </a>
          <a
              href="https://tally.so/r/wAr0Q0"
              target="_blank"
              rel="noreferrer"
          >
            {t("Incubator-Cooperation")}
          </a>
          <a
              href="https://tally.so/r/nG6vRj"
              target="_blank"
              rel="noreferrer"
          >
            {t("Bug-Reporting")}
          </a>
          <Link to="/tos">
            {t("Terms-of-Services")}
          </Link>
          <Link to="/privacy">
            {t("Privacy-Policy")}
          </Link>
        </Cooperation></li>
        <li> <SocialMedia>
          <h5>{t("Social-medial")}</h5>
          <SocialLinks>
            <a
                href="https://twitter.com/see_dao"
                target="_blank"
                rel="noreferrer"
            >
              <img src={twitter} alt="" className="nor"/>
              <img src={TwitterHover} alt="" className="hover"/>
            </a>
            <a
                href="https://discord.com/invite/seedao-xyz"
                target="_blank"
                rel="noreferrer"
            >
              <img src={Dis} alt="" className="nor" />
              <img src={DisHover} alt=""  className="hover"/>
            </a>
            <a
                href="https://seedao.notion.site/"
                target="_blank"
                rel="noreferrer"
            >
              <img src={notion} alt="" className="nor" />
              <img src={notionHover} alt=""  className="hover"/>
            </a>
            <a
                href="https://opensea.io/collection/seedaoseed"
                target="_blank"
                rel="noreferrer"
            >
              <img src={Opensee} alt="" className="nor" />
              <img src={OpenseeHover} alt=""  className="hover"/>
            </a>
            <a
                href="https://t.me/theseedao"
                target="_blank"
                rel="noreferrer"
            >
              <img src={Tg} alt=""  className="nor" />
              <img src={TgHover} alt="" className="hover" />
            </a>
            {/* </SocialLinks> */}
            {/* <SocialLinks> */}
            <a
                href="https://seedao.mirror.xyz"
                target="_blank"
                rel="noreferrer"
            >
              <img src={mi} alt="" className="nor" />
              <img src={miHover} alt="" className="hover" />
            </a>
            <a href="mailto:contactus@seedao.info">
              <img src={mail} alt="" className="nor" />
              <img src={mailHover} alt=""  className="hover" />
            </a>
          </SocialLinks>
          <div className="btmBox">
            <p>© 2023 SeeDAO. All Rights Reserved.</p>
            <p className="powerby">Powered with ❤️ by SeeDAO Polis Team</p>
          </div>

        </SocialMedia></li>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
