import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container } from "./Global.style";

export const Nav = styled.nav`
  background-color: #fff;
  @media screen and (max-width: 960px) {
    background-color: transparent;
  }
`;
export const NavContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  height: 90px;
  padding: 0 1.5%;
  ${Container}
`;

export const Logo = styled.img`
  width: 182px;
  height: 38px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
    img {
      width: 40px;
    }
  }
`;

export const RightSide = styled.div<{ show: boolean }>`
  display: flex;
  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 60vh;
    position: absolute;
    top: 90px;
    opacity: 1;
    transition: all 0.5s ease;
    left: ${({ show }) => (show ? 0 : "-100%")};
    background-color: #d8cfcf;
  }
`;
export const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 30px;
  position: relative;

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const NavigationLink = styled.li`
  text-decoration: none;
  list-style: none;
  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 20px 0;
  }
`;

export const Navigation = styled(NavLink)`
  color: #000;
  text-decoration: none;
  padding: 0 20px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  @media (min-width: 960px) {
    &.active {
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        width: 45px;
        height: 3px;
        background-color: #000;
        opacity: 1;
        border-radius: 7px;
        transition: opacity 300ms ease-in-out;
      }
    }
  }
`;

export const NavButton = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 960px) {
    margin-top: 16px;
  }
`;

export const LanguageBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-weight: 700;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #000;
  color: #a9a5ff;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
`;
