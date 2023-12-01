import Header from "../components/home/Header";
import banner from "../assets/home/banner.svg";
import MemberList from "../components/home/MemberList";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import sun from "../assets/home/sun-shadow.svg";

export const Title = styled.div`
  background: url(${sun}) no-repeat center bottom;
  text-align: center;
  padding: 54px 0 83px;
  font-size: 36px;
  line-height: 54px;
  color: #000;
  font-family: 'DMSans-Medium';
  font-weight: 500;
  max-width: 1150px;
  margin: 0 auto 67px;

  //p {
  //  font-size: 36px;
  //}
  @media (max-width: 768px) {
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.35em;
    padding: 25px 20px 90px;
    background: url(${sun}) no-repeat center bottom;
    background-size: auto 80px;
    margin-bottom: 30px;
  }
`;

export const BannerImg = styled.div`
  img{
    width: 100%;
  }
`;

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Header />
      <Title>
        <p>{t("Home-title2")}</p>
        {/* <p>{t("Title")}</p> */}
      </Title>
        <BannerImg  >
            <img src={banner} alt=""/>
        </BannerImg>
      <MemberList />
    </section>
  );
};

export default Home;
