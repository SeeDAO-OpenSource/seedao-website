import Header from "../components/home/Header";
import { Container } from "../style/Global.style";
import { BannerImg, HomeSection, Title } from "../style/Home.style";
import banner from "../assets/home/banner.svg";
import MemberList from "../components/home/MemberList";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Header />
        <Title>
          <p>
            SeeDAO is a network polis to connect millions nomads in Web3 Let
            web3 return to life
          </p>
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
