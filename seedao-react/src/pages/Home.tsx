import { Container } from "../style/Global.style";
import {
  HomeSection,
  HeaderTitle,
  Header,
  HeaderImg,
  HeaderLeft,
  JoinButton,
} from "../style/Home.style";
import img from "../assets/home/header.png";

const Home = () => {
  return (
    <HomeSection>
      <Container>
        <Header>
          {/* left side */}
          <HeaderLeft>
            <HeaderTitle>TOGETHER CREATE FREEDOM</HeaderTitle>
            <JoinButton>Join us</JoinButton>
          </HeaderLeft>
          {/* right side */}
          <HeaderImg>
            <img src={img} alt="" />
          </HeaderImg>
        </Header>
      </Container>
    </HomeSection>
  );
};

export default Home;
