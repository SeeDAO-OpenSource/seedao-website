import logo from "../../assets/navbar/logo.svg";
import lng from "../../assets/navbar/Frame.svg";
import menu from "../../assets/navbar/menu.svg";
import {
  Nav,
  NavContainer,
  Logo,
  RightSide,
  NavList,
  NavigationLink,
  Navigation,
  NavButton,
  LanguageBtn,
  Button,
  MobileIcon,
} from "../../style/Navbar.style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
