import member from "../../assets/home/member.svg";
import seed from "../../assets/home/seed-holder.svg";
import govern from "../../assets/home/govern-node.svg";
import { Image, List, ListsSection } from "../../style/MemberList.style";
import { t } from "i18next";

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
        <Image src={member} />
        <h3>
          11,359 <span>+</span>
        </h3>
        <a href="">{t("Discord-Member")}</a>
      </List>
      <List>
        <Image src={seed} />
        <h3>547</h3>
        <a href="#">{t("SEED-Holder")}</a>
      </List>
      <List>
        <Image src={govern} />
        <h3>52</h3>
        <a href="#">{t("Governance-Node")}</a>
      </List>
    </ListsSection>
  );
};

export default MemberList;
