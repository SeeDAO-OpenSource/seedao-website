import styled from "styled-components";
import sun from "../assets/home/sun-shadow.svg";

export const HomeSection = styled.section`
  background: linear-gradient(0deg, #fbf5ef 0.09%, #f9f6ff 96.69%);
`;

export const Title = styled.div`
  background: url(${sun}) center no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  text-align: center;
  padding: 20px;
  font-size: 36px;
  line-height: 54px;
  max-width: 1150px;
  margin: 0 auto;
  p {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 30px;
    }
  }
`;

export const BannerImg = styled.img``;
