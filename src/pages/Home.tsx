import Header from "../components/home/Header";
import { Container } from "../style/Global.style";
import { BannerImg, HomeSection, Title } from "../style/Home.style";
import banner from "../assets/home/banner.svg";
import MemberList from "../components/home/MemberList";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <HomeSection>
      <Container>
        <Header />
        <Title>
          <p>{t("Home-title2")}</p>
          {/* <p>{t("Title")}</p> */}
        </Title>
        {/* banner */}
        <BannerImg src={banner} />
        {/* member list */}
        <MemberList />
      </Container>
    </HomeSection>
  );
};

export default Home;
