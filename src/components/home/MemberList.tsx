import member from "../../assets/home/member.svg";
import seed from "../../assets/home/seed-holder.svg";
import govern from "../../assets/home/govern-node.svg";
import { t } from "i18next";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios"

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
    text-decoration: underline;
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


const MemberList = () => {
    const [discordAmount,SetDiscordAmount] = useState(0)
    const [seedHolders, setSEEDHolders] = useState(0);
    const [governNodes, setGovernNodes] = useState(0);

    const SEED_CONTRACT = '0x30093266e34a816a53e302be3e59a93b52792fd4';
    const GOV_NODE_CONTRACT = '0x9d34D407D8586478b3e4c39BE633ED3D7be1c80c';

    useEffect(() => {
        getDiscordNumbers()
        handleSEEDHolders()
        handleGovNodes()
    }, []);

    const getConfig = ()=>{
        if(window.location.href.indexOf("test.seedao.xyz")>-1){
            return 'https://test-spp-indexer.seedao.tech'
        }else{
            return 'https://spp-indexer.seedao.tech'
        }

    }


    const handleGovNodes = async () => {
        fetch(
            `${getConfig()}/insight/erc1155/total_supply_of_tokenId/0x9d34D407D8586478b3e4c39BE633ED3D7be1c80C/4`,
        )
            .then((res: any) => res.json())
            .then((r) => {
                setGovernNodes(Number(r.totalSupply));
            })
            .catch((error: any) => {
                console.error('[SBT] get gov nodes failed', error);
            });
    };
    const handleSEEDHolders = async () => {
        fetch(`${getConfig()}/insight/erc721/total_supply/0x30093266E34a816a53e302bE3e59a93B52792FD4
`)
            .then((res: any) => res.json())
            .then((r) => {
                setSEEDHolders(Number(r.totalSupply));
            })
            .catch((error: any) => {
                console.error('[SBT] get sgn owners failed', error);
            });
    };

   const  getDiscordNumbers = async() => {
        try {
            const resp = await axios.get(`https://test-api.seedao.tech/v1/public_data/discord_member_count`);

            SetDiscordAmount(resp.data.data.approximate_member_count)
        } catch (error) {
            console.error('getDiscordNumbers error', error);
        }
    }



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
            {discordAmount}
        </H3Title>
        <a>{t("Discord-Member")}</a>
      </List>
      <List>
        <img src={seed} />
        <H3Title>{seedHolders}</H3Title>
        <a>{t("SEED-Holder")}</a>
      </List>
      <List>
        <img src={govern} />
        <H3Title>{governNodes}</H3Title>
        <a>{t("Governance-Node")}</a>
      </List>
    </ListsSection>
  );
};

export default MemberList;
