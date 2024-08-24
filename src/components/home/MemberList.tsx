import member from "../../assets/home/member.svg";
import seed from "../../assets/home/seed-holder.svg";
import govern from "../../assets/home/govern-node.svg";
import sns from "../../assets/home/sns-node.svg";
import { t } from "i18next";
import styled from "styled-components";
import {useEffect, useState} from "react";
import axios from "axios"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

export const ListsSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 55px 0 ;
  
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


const TitTop = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
  .top{
    font-size: 48px;
  }
  .tips{
    font-size: 24px;
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    .top{
      font-size: 30px;
    }
    .tips{
      font-size: 16px;
    }
  }
`


const MemberList = () => {
    const [discordAmount,SetDiscordAmount] = useState(0)
    const [seedHolders, setSEEDHolders] = useState(0);
    const [governNodes, setGovernNodes] = useState(0);
    const [base1, setBase1] = useState('https://test-spp-indexer.seedao.tech');
    const [base2, setBase2] = useState('https://test-api.seedao.tech');

    useEffect(() => {
        getDiscordNumbers()
        handleSEEDHolders()
        handleGovNodes()
        getConfig()
    }, []);


    const getConfig = ()=>{
        if(window.location.href.indexOf("test.seedao.xyz")>-1 || window.location.href.indexOf("localhost")>-1 ){
            setBase1('https://test-spp-indexer.seedao.tech')
            setBase2('https://test-api.seedao.tech')
        }else{
            setBase1('https://spp-indexer.seedao.tech')
            setBase2('https://api.seedao.tech')
        }
    }

    const handleGovNodes = async () => {
        fetch(
            `${base1}/insight/erc1155/total_supply_of_tokenId/0x9d34D407D8586478b3e4c39BE633ED3D7be1c80C/6`,
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
        fetch(`${base1}/insight/erc721/total_supply/0x30093266E34a816a53e302bE3e59a93B52792FD4
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
            const resp = await axios.get(`${base2}/v1/public_data/discord_member_count`);

            SetDiscordAmount(resp.data.data.approximate_member_count)
        } catch (error) {
            console.error('getDiscordNumbers error', error);
        }
    }



  return (
      <>
          <TitTop>
              <div className="top">{t("people")}</div>
              <div className="tips">{t("peopleTips")}</div>
          </TitTop>



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
            <VisibilitySensor partialVisibility key="count_1">
                {({ isVisible }:any) => (
                    <div>
                        {isVisible ? <CountUp end={discordAmount} duration={2} /> : 0}
                    </div>
                )}
            </VisibilitySensor>
        </H3Title>
        <a>{t("Discord-Member")}</a>
      </List>
      <List>
        <img src={seed} />
        <H3Title>
            <VisibilitySensor partialVisibility key="count_2">
                {({ isVisible }:any) => (
                    <div>
                        {isVisible ? <CountUp end={seedHolders} duration={2} /> : 0}
                    </div>
                )}
            </VisibilitySensor>
        </H3Title>
        <a>{t("SEED-Holder")}</a>
      </List>
      <List>
        <img src={govern} />
        <H3Title>
            <VisibilitySensor partialVisibility key="count_3">
                {({ isVisible }:any) => (
                    <div>
                        {isVisible ? <CountUp end={governNodes} duration={2} /> : 0}
                    </div>
                )}
            </VisibilitySensor>
        </H3Title>
        <a>{t("Governance-Node")}</a>
      </List>
      <List>
        <img src={sns} />
        <H3Title>
            <VisibilitySensor partialVisibility key="count_3">
                {({ isVisible }:any) => (
                    <div>
                         {isVisible ? <CountUp end={602} duration={2} /> : 0}
                    </div>
                )}
            </VisibilitySensor>
        </H3Title>
        <a>{t("Sns-Node")}</a>
      </List>
    </ListsSection>
      </>
  );
};

export default MemberList;
