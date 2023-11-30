import whitePaper from "../../assets/intro/white-paper.svg";
import meta from "../../assets/intro/meta.svg";
import seedao from "../../assets/intro/seedao.svg";
import global from "../../assets/intro/global.svg";
import city from "../../assets/intro/city-hall.svg";
import combinator from "../../assets/intro/combinator.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const IntroList = () => {
  const { t } = useTranslation();
  return (
    <Lists>
      <WhitePaper href="SeeDAO-WhitePaper.pdf" download="SeeDAO-WhitePaper.pdf">
        <Image src={whitePaper} />
        <p>{t("Link-Whitepaper")}</p>
      </WhitePaper>
      <Meta
        href="https://seedao.notion.site/8745195e74c34a90b1aa115504e20a97"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={meta} />
        <p>{t("Link-Meta")}</p>
      </Meta>
      <Sedao href="https://app.seedao.xyz" target="_blank" rel="noreferrer">
        <Image src={seedao} />
        <p>{t("Link-App")}</p>
      </Sedao>
      <Global href="https://seeu.network/" target="_blank" rel="noreferrer">
        <Image src={global} />
        <p>{t("Link-Net")}</p>
      </Global>
      <CityHall
        href="https://seedao.notion.site/b99eb0b3bf97436490f9839aebe29b3e?pvs=4"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={city} />
        <p>{t("Link-City-Hall")}</p>
      </CityHall>
      <Combinator
        href="https://beta.seedao.cc/"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={combinator} />
        <p>{t("Link-Combinator")}</p>
      </Combinator>
    </Lists>
  );
};

export default IntroList;

const Lists = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 30px;
  /* padding: 30px 40px; */
  margin: 50px 40px;
  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    margin: 30px 20px;
  }
`;
const ListGlobal = styled.a`
  /* max-width: 370px; */
  width: 100%;
  border-radius: 16px;
  box-shadow: 2px 5px 12px -13px rgba(201, 176, 151, 0.04);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px 10px 30px 10%;
  font-size: 20px;
  text-decoration: none;
  color: #000;
  @media (max-width: 768px) {
    padding: 20px 5px 20px 10px;
    font-size: 14px;
  }
`;
const WhitePaper = styled(ListGlobal)`
  background: linear-gradient(180deg, #e4fef5 0%, #fbf5ef 100%);
`;
const Meta = styled(ListGlobal)`
  background: linear-gradient(180deg, #ffefed 0%, #fbf5ef 100%);
`;
const Sedao = styled(ListGlobal)`
  background: linear-gradient(180deg, #ededff 0%, #fbf5ef 100%);
`;
const Global = styled(ListGlobal)`
  background: linear-gradient(180deg, #edf9ff 0%, #fbf5ef 100%);
`;
const CityHall = styled(ListGlobal)`
  background: linear-gradient(180deg, #fffaed 0%, rgba(255, 255, 255, 0) 100%);
`;
const Combinator = styled(ListGlobal)`
  background: linear-gradient(180deg, #edffed 0%, #fbf5ef 100%);
`;
const Image = styled.img`
  max-width: 100px;
  @media (max-width: 768px) {
    width: 80px;
  }
  @media (max-width: 625px) {
    width: 50px;
  }
`;
