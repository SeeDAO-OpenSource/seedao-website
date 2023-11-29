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
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleNavToggle = () => setShow(!show);
  const closeMobileMenu = () => setShow(false);
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
                  关于SEEDDAO
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation to="/journey" onClick={closeMobileMenu}>
                  城邦之旅
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation to="/build" onClick={closeMobileMenu}>
                  着手建设
                </Navigation>
              </NavigationLink>
              <NavigationLink>
                <Navigation to="/podcast" onClick={closeMobileMenu}>
                  播客
                </Navigation>
              </NavigationLink>
            </NavList>
            <NavButton>
              <LanguageBtn>
                <img src={lng} alt="" />
                <p>EN</p>
              </LanguageBtn>
              <Button>进入城邦</Button>
            </NavButton>
          </RightSide>
          {/* </Container> */}
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
