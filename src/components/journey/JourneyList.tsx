import onbording from "../../assets/journey/onbording.svg";
import contributor from "../../assets/journey/contributor.svg";
import bounties from "../../assets/journey/bounties.svg";
import proposal from "../../assets/journey/proposal.svg";
import seed from "../../assets/journey/seed.svg";
import nodes from "../../assets/journey/nodes.svg";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const IntroList = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <Lists>
                <li>
                    <a href="https://deschool.app/zh/series/62f0adc68b90ee1aa913a965/learning?courseId=62f0adc68b90ee1aa913a966"
                       target="_blank"
                       rel="noreferrer"
                    >
                        <img src={onbording} />
                        <span>{t("Onboarding-process")}</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://seedao.notion.site/SeeDAO-title-3776ce83b95e4a5f9209d90911ed84c1?pvs=4"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={contributor} />
                        <span>{t("Contributor-Identity")}</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={bounties} />
                        <span>{t("Bounties")}</span>
                    </a>
                </li>
                <li>
                    <a href="https://app.seedao.xyz/proposal/category/19" target="_blank" rel="noreferrer">
                        <img src={proposal} />
                        <span>{t("Proposals")}</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://seed.seedao.xyz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={seed} />
                        <span>{t("Seed-NFT")}</span>
                    </a>
                </li>
                <li>
                    <a
                        href="https://node.seedao.xyz/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={nodes} />
                        <span>{t("Nodes-Consensus-Congress")}</span>
                    </a>
                </li>

            </Lists>
        </Box>
    );
};

export default IntroList;

const Box = styled.div`
  margin: 50px 7vw 160px;
  @media (max-width: 768px) {
    margin: 0 24px 15px;
  }
`

const Lists = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: space-between;
  li{
    width: 32%;
    height: 206px;
    margin-bottom: 30px;
    /* max-width: 370px; */
    border-radius: 16px;
    box-shadow: 2px 5px 12px -13px rgba(201, 176, 151, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    img{
      margin-right: 23px;
    }
    span{
      font-family: 'DMSans-Bold';
      font-size: 20px;
      line-height: 20px;
    }
    a{
      color: #000;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    &:first-child{
      background: linear-gradient(180deg, #e4fef5 0%, #fbf5ef 100%);
      &:hover{
        background: linear-gradient(180deg, #e4fef5 0%, #fff 100%);
      }
    }
    &:nth-child(2){
      background: linear-gradient(180deg, #ffefed 0%, #fbf5ef 100%);
      &:hover{
        background: linear-gradient(180deg, #ffefed 0%, #fff 100%);
      }
    }
    &:nth-child(3){
      background: linear-gradient(180deg, #ededff 0%, #fbf5ef 100%);
      &:hover{
        background: linear-gradient(180deg, #ededff 0%, #fff 100%);
      }
    }
    &:nth-child(4){
      background: linear-gradient(180deg, #edf9ff 0%, #fbf5ef 100%);
      &:hover{
        background: linear-gradient(180deg, #edf9ff 0%, #fff 100%);
      }
    } 
    &:nth-child(5){
      background: linear-gradient(180deg, #fffaed 0%, #fbf5ef 100%);
      &:hover{
        background: linear-gradient(180deg, #fffaed 0%, #fff 100%);
      }
    }
    &:nth-child(6){
      background: linear-gradient(180deg, #edffed 0%, #fbf5ef 100%);
      &:hover{
        background: linear-gradient(180deg, #edffed 0%, #fff 100%);
      }
    }
  }
  @media (max-width: 768px) {
    li {
      width: 48%;
      height: 85px;
      margin-bottom: 12px;
      border-radius: 8px;
      img{
        width: 46px;
      }
      span{
        font-size: 10px;
        line-height: 10px;
      }
    }
  }
  
  
`;

