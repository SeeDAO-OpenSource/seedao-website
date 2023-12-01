import member from "../../assets/home/member.svg";
import seed from "../../assets/home/seed-holder.svg";
import govern from "../../assets/home/govern-node.svg";
import { t } from "i18next";
import styled from "styled-components";

export const ListsSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 85px 0 55px;
  
  @media (max-width: 768px) {
    background: #FAF7FF;
    padding: 55px 20px;
  }
`;

const H3Title = styled.div`
  font-size: 32px;
  font-weight: 700;
  font-family: 'Inter-Bold';
  padding: 24px 0;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

export const List = styled.div`
  text-align: center;
  width: 33.333%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    color: #111;
    font-size: 16px;
    font-family: 'DMSans-Regular';
  }
  @media (max-width: 768px) {
    img {
      width: 80px;
    }
    a{
      font-size: 11px;
    }
  }
`;

const list = [
  {
    total: 11359,
    title: "Member",
    logo: member,
  },
  {
    total: 547,
    title: "Seed Holder",
    logo: seed,
  },
  {
    total: 52,
    title: "Govern node",
    logo: govern,
  },
];

const MemberList = () => {
  return (
    <ListsSection>
      {/* {list.map((item, i) => (
        <List key={i}>
          <Image src={item.logo} />
          <h3>{item.title === "Member" ? `${item.total} +` : item.total}</h3>
          <a href="#">{item.title}</a>
        </List>
      ))} */}
      <List>
        <img src={member} />
        <H3Title>
          11,359 <span>+</span>
        </H3Title>
        <a href="">{t("Discord-Member")}</a>
      </List>
      <List>
        <img src={seed} />
        <H3Title>547</H3Title>
        <a href="#">{t("SEED-Holder")}</a>
      </List>
      <List>
        <img src={govern} />
        <H3Title>52</H3Title>
        <a href="#">{t("Governance-Node")}</a>
      </List>
    </ListsSection>
  );
};

export default MemberList;
