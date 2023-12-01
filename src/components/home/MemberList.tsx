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

    const getDatafromNftscan = (contract: string, base?: string) => {
        return axios.get(`${base || 'https://polygonapi.nftscan.com'}/api/v2/statistics/collection/${contract}`, {
            headers: {
                'X-API-KEY': process.env.REACT_APP_NFTSCAN_KEY,
            },
        });
    };

    const handleGovNodes = async () => {
        try {
            const res = await getDatafromNftscan(GOV_NODE_CONTRACT, 'https://restapi.nftscan.com');
            setGovernNodes(res.data?.data?.owners_total || 0);
        } catch (error) {
            console.error('[SBT] get gov nodes failed', error);
        }
    };
    const handleSEEDHolders = async () => {
        try {
            const res = await getDatafromNftscan(SEED_CONTRACT, 'https://restapi.nftscan.com');
            setSEEDHolders(res.data?.data?.items_total || 0);
        } catch (error) {
            console.error('[SBT] get sgn owners failed', error);
        }
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
