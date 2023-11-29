import onbording from "../../assets/journey/onbording.svg";
import contributor from "../../assets/journey/contributor.svg";
import bounties from "../../assets/journey/bounties.svg";
import proposal from "../../assets/journey/proposal.svg";
import seed from "../../assets/journey/seed.svg";
import nodes from "../../assets/journey/nodes.svg";
import styled from "styled-components";

const JourneyList = () => {
  return (
    <Lists>
      <Onboarding>
        <Image src={onbording} />
        <p>
          Onboarding <br /> Process
        </p>
      </Onboarding>
      <Contributor>
        <Image src={contributor} />
        <p>
          Contributor <br /> Identity
        </p>
      </Contributor>
      <Bounties>
        <Image src={bounties} />
        <p>Bounties</p>
      </Bounties>
      <Proposals>
        <Image src={proposal} />
        <p> Proposals</p>
      </Proposals>
      <Seed>
        <Image src={seed} />
        <p>Seed NFT</p>
      </Seed>
      <NodesConsensus>
        <Image src={nodes} />
        <p>
          Nodes Consensus <br /> Congress
        </p>
      </NodesConsensus>
    </Lists>
  );
};

export default JourneyList;

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
const ListGlobal = styled.div`
  /* max-width: 370px; */
  width: 100%;
  border-radius: 16px;
  box-shadow: 2px 5px 12px -13px rgba(201, 176, 151, 0.04);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px 10px 30px 10%;
  font-size: 20px;
  @media (max-width: 768px) {
    padding: 20px 5px 20px 10px;
    font-size: 14px;
  }
`;
const Onboarding = styled(ListGlobal)`
  background: linear-gradient(180deg, #e4fef5 0%, #fbf5ef 100%);
`;
const Contributor = styled(ListGlobal)`
  background: linear-gradient(180deg, #ffefed 0%, #fbf5ef 100%);
`;
const Bounties = styled(ListGlobal)`
  background: linear-gradient(180deg, #ededff 0%, #fbf5ef 100%);
`;
const Proposals = styled(ListGlobal)`
  background: linear-gradient(180deg, #edf9ff 0%, #fbf5ef 100%);
`;
const Seed = styled(ListGlobal)`
  background: linear-gradient(180deg, #fffaed 0%, rgba(255, 255, 255, 0) 100%);
`;
const NodesConsensus = styled(ListGlobal)`
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
