import logo from "../../assets/navbar/logo.svg";
import lng from "../../assets/navbar/Frame.svg";
import menu from "../../assets/navbar/menu.svg";

import { useEffect, useState } from "react";
import {Link, NavLink} from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fff;
  /* @media screen and (max-width: 960px) { */
  //@media screen and (max-width: 768px) {
  //  background-color: transparent;
  //}
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  height: 90px;
  padding: 0 30px;
  font-family: 'DMSans-Bold';
`;

export const Logo = styled.img`
  width: 182px;

  //@media screen and (max-width: 1024px) {
  //  width: 140px;
  //  height: 30px;
  //  margin-left: 10px;
  //}
`;

export const MobileIcon = styled.div`
  display: none;

  /* @media screen and (max-width: 960px) { */
  //@media screen and (max-width: 768px) {
  //  display: block;
  //  position: absolute;
  //  top: 0;
  //  right: 0;
  //  transform: translate(-60%, 60%);
  //  cursor: pointer;
  //  img {
  //    width: 40px;
  //  }
  //}
`;
export const RightSide = styled.div<{ show: boolean }>`
  display: flex;
  // @media screen and (max-width: 1024px) {
  //   gap: 8px;
  // }
  // /* @media (max-width: 960px) { */
  // @media (max-width: 768px) {
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   align-items: center;
  //   gap: 16px;
  //   width: 100%;
  //   height: 60vh;
  //   position: absolute;
  //   top: 90px;
  //   opacity: 1;
  //   transition: all 0.5s ease;
  //   left: ${({ show }) => (show ? 0 : "-100%")};
  //   background-color: #d8cfcf;
  // }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 9vw;

  //@media screen and (max-width: 1024px) {
  //  margin-right: 4px;
  //}
  //
  ///* @media (max-width: 960px) { */
  //@media (max-width: 768px) {
  //  display: flex;
  //  flex-direction: column;
  //  justify-content: center;
  //}
`;

export const NavigationLink = styled.li`
  text-decoration: none;
  list-style: none;
  margin-left: 5vw;
  white-space: nowrap;
  /* @media screen and (max-width: 960px) { */
  //@media screen and (max-width: 768px) {
  //  width: 100%;
  //  padding: 20px 0;
  //}
`;

export const Navigation = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 0 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  //@media screen and (max-width: 1024px) {
  //  padding: 0 10px;
  //}
  ///* @media (min-width: 960px) { */
  //@media (min-width: 768px) {
  //  &.active {
  //    &::before {
  //      content: "";
  //      position: absolute;
  //      bottom: 0;
  //      width: 45px;
  //      height: 3px;
  //      background-color: #000;
  //      opacity: 1;
  //      border-radius: 7px;
  //      transition: opacity 300ms ease-in-out;
  //    }
  //  }
  //}
`;

export const NavButton = styled.div`
  display: flex;
  @media (max-width: 768px) {
    margin-top: 16px;
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
          <RightSide show={show}>
            <NavList>
              <NavigationLink>
                <Navigation to="/intro" onClick={closeMobileMenu}>
                  {t("Intro")}
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation to="/journey" onClick={closeMobileMenu}>
                  {t("Journey")}
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation to="/build" onClick={closeMobileMenu}>
                  {t("Build")}
                </Navigation>
              </NavigationLink>
              <NavigationLink style={{ pointerEvents: "none" }}>
                <Navigation to="/podcast" onClick={closeMobileMenu}>
                  {t("Podcast")}
                </Navigation>
              </NavigationLink>
            </NavList>
            <NavButton>
              <LanguageBtn onClick={handleChangeLanguage}>
                <img src={lng} alt="" />
                <p>{currentLanguage === "en" ? "CN" : "EN"}</p>
              </LanguageBtn>
              <Button>{t("Enter-App")}</Button>
            </NavButton>
          </RightSide>
          {/* </Container> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;

