import member from "../../assets/home/member.svg";
import seed from "../../assets/home/seed-holder.svg";
import govern from "../../assets/home/govern-node.svg";
import { Image, List, ListsSection } from "../../style/MemberList.style";

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
      {list.map((item, i) => (
        <List key={i}>
          <Image src={item.logo} />
          <h3>{item.title === "Member" ? `${item.total} +` : item.total}</h3>
          <a href="#">{item.title}</a>
          {/* <a>{item.title}</a> */}
        </List>
      ))}
    </ListsSection>
  );
};

export default MemberList;
