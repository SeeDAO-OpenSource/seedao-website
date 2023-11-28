import styled from "styled-components";
import { Container } from "../style/Global.style";
import JourneyHeader from "../components/journey/JourneyHeader";
import JourneyDetails from "../components/journey/JourneyDetails";
import JourneyList from "../components/journey/JourneyList";

const Journey = () => {
  return (
    <JourneySection>
      <JourneyContainer>
        <JourneyHeader />
        <JourneyDetails />
        <JourneyList />
      </JourneyContainer>
    </JourneySection>
  );
};

export default Journey;

const JourneySection = styled.section`
  background: linear-gradient(181deg, #ffdce2 0.85%, #fbf5ef 95.53%),
    linear-gradient(180deg, #cdcbff 0%, #fbf5ef 100%);
`;
const JourneyContainer = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1%;
  padding-top: 90px;
  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;
