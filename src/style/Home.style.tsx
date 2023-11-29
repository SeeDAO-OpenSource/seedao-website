import styled from "styled-components";
import sun from "../assets/home/sun-shadow.svg";

export const HomeSection = styled.section`
  background: linear-gradient(0deg, #fbf5ef 0.09%, #f9f6ff 96.69%);
`;

export const Title = styled.div`
  background: url(${sun}) no-repeat;
  background-position: center;
  height: 324px;
  text-align: center;
  padding: 54px 20px;
  font-size: 36px;
  line-height: 54px;
  max-width: 1150px;
  margin: 0 auto;
  p {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    background-position: bottom;
    p {
      font-size: 30px;
      /* padding: 10px 20px; */
    }
  }
`;

export const BannerImg = styled.img`
  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
