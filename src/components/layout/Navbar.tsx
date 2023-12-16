import logo from "../../assets/navbar/logo.svg";
import lng from "../../assets/navbar/Frame.svg";
import menu from "../../assets/navbar/menu.svg";

import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import {NavDropdown} from 'react-bootstrap';

export const Nav = styled.nav`
  background-color: #fff;

  .dropdown-toggle::after{
    display: none;
  }
  .dropdown-menu{
    border: 0;
    box-shadow: 2px 4px 4px 0px rgba(211,206,221,0.3);
  }
  .dropdown-item {
    display: flex;
    justify-content: flex-start;
    padding:8px 10px;
    &:active{
      background: var(--bs-dropdown-link-hover-bg);
      color: #000000;
    }
  }
  /* @media screen and (max-width: 960px) { */
  @media screen and (max-width: 768px) {
    background-color: transparent;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    z-index: 9999;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  height: 90px;
  padding: 0 30px;
  font-family: 'DMSans-Bold';
  @media screen and (max-width: 768px) {
    height: 70px;
  }
`;

export const Logo = styled.img`
  width: 182px;

  @media screen and (max-width: 1024px) {
    height:18px;
    width: auto;
    z-index: 9999;
    position: relative;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  /* @media screen and (max-width: 960px) { */
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    transform: translate(-60%, 60%);
    cursor: pointer;
    img {
      width: 24px;
    }
  }
`;
export const RightSide = styled.div<{ show: boolean }>`
  display: flex;
  // /* @media (max-width: 960px) { */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 9;
    padding-top: 80px;
    transition: all 0.5s ease;
    left: ${({ show }) => (show ? 0 : "-100%")};
    background-color: #fff;
  }
`;

const Mask = styled.div<{ show: boolean }>`
  @media (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    z-index: 8;
    position: absolute;
    top: 0;
    transition: all 0.5s ease;
    left: ${({ show }) => (show ? 0 : "-100%")};
    background: rgba(0,0,0,0.3);
  }

`
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 9vw;
  display: none;
  /* @media (max-width: 960px) { */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 0;
    width: 100%;

  }
`;

const NavList2 = styled(NavList)`
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavigationLink = styled.li`
  text-decoration: none;
  list-style: none;
  margin-left: 5vw;
  white-space: nowrap;
  /* @media screen and (max-width: 960px) { */
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px 10px;
    margin-left: 0;
    display: flex;
    font-size: 15px;
  }
`;

export const Navigation = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 0 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  &.active{
    position: relative;
    &:after{
      content: "";
      position: absolute;
      width: 40px;
      height: 3px;
      background: #000;
      margin: 0 auto;
      bottom: -10px;
      border-radius: 10px;
    }
  }
  
  
  @media screen and (max-width: 1024px) {
    padding: 0 10px;
  }

  @media screen and (max-width: 768px) {
    &.active{
      position: relative;
      &:after{
        display: none;
      }
    }
  }
//@media (min-width: 960px) { 
//    &.active {
//      &::before {
//        //content: "";
//        //position: absolute;
//        //bottom: 0;
//        //width: 45px;
//        //height: 3px;
//        //background-color: #000;
//        //opacity: 1;
//        //border-radius: 7px;
//        //transition: opacity 300ms ease-in-out;
//      }
//    }
//  }
`;

export const NavButton = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-top: 16px;
    width: 100%;
    flex-direction: column;
  }
`;

export const LanguageBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-right: 32px;
  cursor: pointer;
  p {
    font-weight: 700;
  }
  @media (max-width: 768px) {
    gap: 0;
    order:1;
    width: 100%;
    justify-content: center;
    padding: 15px 0;
    border-top: 1px solid #D9D9D9;
    margin-top: 20px;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #000;
  color: #a9a5ff;
  font-size: 18px;
  padding: 15px 39px;
  border-radius: 4px;
  cursor: pointer;
  font-family: 'DMSans-Bold';
  white-space: nowrap;
  @media (max-width: 768px) {
    margin: 0 24px;
    padding: 15px;
    font-size: 15px;
    width: calc(100% - 40px);
  }
`;

const Navbar = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [show, setShow] = useState(false);
  const handleNavToggle = () => setShow(!show);
  const closeMobileMenu = () => setShow(false);
  // change language
  const initialLanguage = localStorage.getItem("currentLanguage") || "en";
  const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);
  useEffect(() => {
    localStorage.setItem("currentLanguage", language);
    changeLanguage(currentLanguage);
  }, [currentLanguage, language]);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "cn" : "en";
    setCurrentLanguage(newLanguage);
    setShow(false)
  };
  return (
    <>
      <Nav>
        <NavContainer>
          {/* <Container> */}
          <Link to="/">
            <Logo src={logo} />
          </Link>
          {/* mobile icon */}
          <MobileIcon onClick={handleNavToggle}>
            <img src={menu} alt="" />
          </MobileIcon>
          <Mask show={show}>


          <RightSide show={show}>
            <NavList>
              <NavigationLink>
                <Navigation to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
                  {t("Home")}
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation className={({ isActive }) => isActive ? 'active' : ''} to="/intro" onClick={closeMobileMenu}>
                  {t("Intro")}
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation className={({ isActive }) => isActive ? 'active' : ''} to="/journey" onClick={closeMobileMenu}>
                  {t("Journey")}
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation className={({ isActive }) => isActive ? 'active' : ''} to="/build" onClick={closeMobileMenu}>
                  {t("Build")}
                </Navigation>
              </NavigationLink>
              {/*<NavigationLink style={{ pointerEvents: "none" }}>*/}
              {/*  <Navigation to="/podcast" onClick={closeMobileMenu}>*/}
              {/*    {t("Podcast")}*/}
              {/*  </Navigation>*/}
              {/*</NavigationLink>*/}
            </NavList>

            <NavList2>

              <NavigationLink>
                <Navigation to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMobileMenu}>
                  {t("Home")}
                </Navigation>
              </NavigationLink>
              {/*<NavigationLink>*/}
              {/*  <NavDropdown title={t("Home")} id="drop1">*/}
              {/*    <NavDropdown.Item href="https://app.seedao.xyz/sns" target="_blank" rel="noreferrer" >*/}
              {/*      {t("Earn-Membership")}*/}
              {/*    </NavDropdown.Item>*/}
              {/*    <NavDropdown.Divider />*/}
              {/*    <NavDropdown.Item href="/" onClick={closeMobileMenu}>*/}
              {/*        {t("Home")}*/}
              {/*    </NavDropdown.Item>*/}
              {/*  </NavDropdown>*/}
              {/*</NavigationLink>*/}
              <NavigationLink>
                <NavDropdown title={t("Intro")} id="drop2">

                  <NavDropdown.Item href="SeeDAO-WhitePaper.pdf" target="_blank" rel="noreferrer">
                    {t("Link-Whitepaper")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="SeeDAO-Meta.pdf" target="_blank" rel="noreferrer">{t("Link-Meta")}</NavDropdown.Item>
                  <NavDropdown.Item  href="https://app.seedao.xyz" target="_blank" rel="noreferrer">{t("Link-App")}</NavDropdown.Item>
                  <NavDropdown.Item  href="https://seeu.network/" target="_blank" rel="noreferrer">{t("Link-Net")}</NavDropdown.Item>
                  <NavDropdown.Item   href="https://seedao.notion.site/b99eb0b3bf97436490f9839aebe29b3e?pvs=4" target="_blank" rel="noreferrer">{t("Link-City-Hall")}</NavDropdown.Item>
                  <NavDropdown.Item  href="https://beta.seedao.cc/" target="_blank" rel="noreferrer">{t("Link-Combinator")}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/intro">
                      {t("Intro")}
                  </NavDropdown.Item>
                </NavDropdown>
              </NavigationLink>
              <NavigationLink>
                <NavDropdown title={t("Journey")} id="drop3">
                  <NavDropdown.Item href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning?courseId=62f0adc68b90ee1aa913a966" target="_blank" rel="noreferrer">
                    {t("Onboarding-process")}
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://seedao.notion.site/SeeDAO-title-3776ce83b95e4a5f9209d90911ed84c1?pvs=4" target="_blank" rel="noreferrer">{t("Contributor-Identity")}</NavDropdown.Item>
                  <NavDropdown.Item href="https://app.seedao.xyz/pub" target="_blank" rel="noreferrer">{t("Bounties")}</NavDropdown.Item>
                  <NavDropdown.Item href="https://app.seedao.xyz/proposal/category/19" target="_blank" rel="noreferrer">{t("Proposals")}</NavDropdown.Item>
                  <NavDropdown.Item href="https://seed.seedao.xyz/" target="_blank" rel="noreferrer">{t("Seed-NFT")}</NavDropdown.Item>
                  <NavDropdown.Item  href="https://node.seedao.xyz/" target="_blank" rel="noreferrer">{t("Nodes-Consensus-Congress")}</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/journey">
                      {t("Journey")}
                  </NavDropdown.Item>
                </NavDropdown>
              </NavigationLink>

              <NavigationLink>
                <NavDropdown title={t("Build")} id="drop4">
                  <NavDropdown.Item href="https://app.seedao.xyz/proposal/category/19" target="_blank" rel="noreferrer">
                    {t("Link-Proposal")}
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/build">
                      {t("Build")}
                  </NavDropdown.Item>
                </NavDropdown>

              </NavigationLink>
            </NavList2>
            <NavButton>
              <LanguageBtn onClick={handleChangeLanguage}>
                <img src={lng} alt="" />
                <p>{currentLanguage === "en" ? "CN" : "EN"}</p>
              </LanguageBtn>
              <a href="https://app.seedao.xyz" rel="noreferrer" target="_blank">
                <Button >{t("Enter-App")}</Button>
              </a>

            </NavButton>
          </RightSide>
          </Mask>
          {/* </Container> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

