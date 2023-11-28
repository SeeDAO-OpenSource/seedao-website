import styled from "styled-components";

export const IntroHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 70px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 30px 20px;
  }
`;
export const IntroTitle = styled.div`
  width: 40%;
  h1 {
    font-size: 48px;
    font-weight: 500;
  }
  h2 {
    font-size: 40px;
    margin-top: 42px;
    font-weight: 500;
    line-height: 51px;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 28px;
      max-width: 650px;
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    h1 {
      margin-top: 30px;
      font-size: 28px;
    }
    h2 {
      font-size: 28px;
    }
  }
`;
export const IntroLogo = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
  /* padding-right: 164px; */
`;
