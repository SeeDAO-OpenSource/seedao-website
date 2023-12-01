import Header from "../components/home/Header";
import banner from "../assets/home/banner.jpg";
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
  width: 79%;
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
  position: relative;
  img{
    width: 100%;
  }
  a{
    opacity: 0;
  }
  @media (max-width: 768px) {
    a{
      display: none;
    }
  }
`;

const Metaforo = styled.a`
  display: block;
  width: 8vw;
  height: 7vw;
  position: absolute;
  left: 19vw;
  top:11vw;
  background: rgba(0,0,0,0.5);
`
const AAAny = styled.a`
  display: block;
  width: 6.8vw;
  height: 5vw;
  position: absolute;
  left: 69vw;
  top:6.4vw;
  background: rgba(0,0,0,0.5);
`
const Cascad3 = styled.a`
  display: block;
  width: 8vw;
  height: 10vw;
  position: absolute;
  left: 80vw;
  top:22vw;
  background: rgba(0,0,0,0.5);
`
const Wormhole3 = styled.a`
  display: block;
  width: 9vw;
  height: 10vw;
  position: absolute;
  left: 62vw;
  top:25vw;
  background: rgba(0,0,0,0.5);
  border-radius: 100px;
`

const DeSchool = styled.a`
  display: block;
  width: 8vw;
  height: 7vw;
  position: absolute;
  left: 9.5vw;
  top:15vw;
  background: rgba(0,0,0,0.5);
`
const SeeU = styled.a`
  display: block;
  width: 8vw;
  height: 8vw;
  position: absolute;
  left: 84vw;
  top:13vw;
  background: rgba(0,0,0,0.5);
`
const Ensoul = styled.a`
  display: block;
  width: 8vw;
  height: 8vw;
  position: absolute;
  left: 46vw;
  top:28vw;
  border-radius: 50px;
  background: rgba(0,0,0,0.5);
`
const PFP = styled.a`
  display: block;
  width: 8vw;
  height: 7vw;
  position: absolute;
  left: 89vw;
  top:32vw;
  background: rgba(0,0,0,0.5);
`
const Sellix = styled.a`
  display: block;
  width: 7vw;
  height: 10vw;
  position: absolute;
  left: 79.5vw;
  top:36vw;
  background: rgba(0,0,0,0.5);
`
const Echo = styled.a`
  display: block;
  width: 5.5vw;
  height: 8vw;
  position: absolute;
  left:62vw;
  top:2.5vw;
  background: rgba(0,0,0,0.5);
`
const DAOLink = styled.a`
  display: block;
  width: 10vw;
  height: 7vw;
  position: absolute;
  left:52.5vw;
  top:22vw;
  border-radius:40px;
  background: rgba(0,0,0,0.5);
`
const SeeDAO = styled.a`
  display: block;
  width: 8vw;
  height: 7vw;
  position: absolute;
  left:70vw;
  top:20vw;
  border-radius:40px;
  background: rgba(0,0,0,0.5);
`

const Home = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Header />
      <Title>
        <p>{t("Home-title2")}</p>
        {/* <p>{t("Title")}</p> */}
      </Title>
        <BannerImg >
            <Metaforo href="https://forum.seedao.xyz/" target="_blank" rel="noreferrer"  />
            <AAAny href="https://apps.apple.com/ca/app/aaany-ask-anyone-anything/id6450619356" target="_blank" rel="noreferrer"  />
            <Cascad3 href="https://www.cascad3.com/" target="_blank" rel="noreferrer"  />
            <Wormhole3 href="https://alpha.wormhole3.io" target="_blank" rel="noreferrer"  />
            <DeSchool href="https://deschool.app/" target="_blank" rel="noreferrer"  />
            <SeeU href="https://seeu.network/" target="_blank" rel="noreferrer"  />
            <Ensoul href="https://www.ensoul.io/" target="_blank" rel="noreferrer"  />
            <PFP href="https://www.pfp-dao.io/" target="_blank" rel="noreferrer"  />
            <Sellix href="https://sellix.io/" target="_blank" rel="noreferrer"  />
            <Echo href="https://echo3.world/" target="_blank" rel="noreferrer"  />
            <DAOLink href="https://app.daolink.space" target="_blank" rel="noreferrer"  />
            <SeeDAO href="https://app.seedao.xyz/" target="_blank" rel="noreferrer"  />
            <img src={banner} alt=""/>
        </BannerImg>
      <MemberList />
    </section>
  );
};

export default Home;
