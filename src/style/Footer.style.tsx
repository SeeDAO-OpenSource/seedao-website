import styled from "styled-components";

export const FooterContainer = styled.section`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1%;
`;

export const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  /* margin: 48px 60px; */
  color: #b0aca7;
  opacity: 0.8;
  padding: 80px 60px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* gap: 20px; */
    justify-content: center;
    text-align: center;
    margin: 10px 10px;
    padding: 40px 14px;
  }
`;
export const PartnersContainer = styled.div`
  @media (max-width: 768px) {
    /* text-align: center; */
  }
  /* width: 33%; */
`;
export const PartnerTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 0 4px;
  padding-bottom: 14px;
`;
export const PortfolioTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  padding: 14px 4px;
  margin-top: 30px;
`;
export const Partners = styled.div`
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
export const Partner = styled.div`
  display: flex;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
`;
export const Logo1 = styled.div`
  img {
    max-width: 53px;
  }
`;
export const Logo2 = styled.div`
  img {
    max-width: 74px;
  }
`;
export const Logo3 = styled.div`
  img {
    max-width: 105px;
  }
`;
export const Logo4 = styled.div`
  img {
    max-width: 84px;
  }
`;

export const Logo5 = styled.div`
  img {
    max-width: 65px;
  }
`;
export const Logo6 = styled.div`
  img {
    max-width: 91px;
  }
`;
export const Logo7 = styled.div`
  img {
    max-width: 45px;
  }
`;
export const Logo8 = styled.div`
  img {
    max-width: 76px;
  }
`;
export const Logo9 = styled.div`
  img {
    max-width: 76px;
  }
`;
export const Logo10 = styled.div`
  img {
    max-width: 76px;
  }
`;

// portfolio
export const Portfolio = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
`;
export const Logo11 = styled.div`
  img {
    max-width: 73px;
  }
`;
export const Logo12 = styled.div`
  img {
    max-width: 24px;
  }
`;
export const Logo13 = styled.div`
  img {
    max-width: 87px;
  }
`;
export const Logo14 = styled.div`
  img {
    max-width: 31px;
  }
`;
export const Logo15 = styled.div`
  img {
    max-width: 28px;
  }
`;
export const Logo16 = styled.div`
  img {
    max-width: 61px;
  }
`;
export const Logo17 = styled.div`
  img {
    max-width: 31px;
  }
`;
export const Logo18 = styled.div`
  img {
    max-width: 113px;
  }
`;
export const Logo19 = styled.div`
  img {
    max-width: 33px;
  }
`;
export const Logo20 = styled.div`
  img {
    max-width: 69px;
  }
`;

export const Cooperation = styled.div`
  /* width: 33%; */
  line-height: 40px;
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    margin-top: 35px;
  }
`;
export const CooperationTitle = styled.h6`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 10px;
`;
export const Incubator = styled.a`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
`;

export const CLink = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #b0aca7;
  text-decoration: none;
`;
export const SocialMedia = styled.div`
  /* width: 33%; */
  position: relative;
  h5 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  p {
    position: absolute;
    bottom: 16px;
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    h5 {
      margin-bottom: 20px;
      margin-top: 22px;
    }
    p {
      position: relative;
      margin-top: 40px;
      padding-top: 20px;
      bottom: 0;
    }
  }
`;
export const SocialLinks = styled.div`
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

export const SocialLink = styled.a`
  img {
    max-width: 36px;
  }
`;
