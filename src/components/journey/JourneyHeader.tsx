import styled from "styled-components";
import journeyLogo from "../../assets/journey/journey-banner.svg";

const JourneyHeader = () => {
  return (
    <JourneyHeaderContainer>
      <JourneyTitle>
        <h1>Journey</h1>
        <h2>
          Welcome to the start of your <br /> journey to the city-state!
        </h2>
      </JourneyTitle>
      <JourneyLogo>
        <img src={journeyLogo} alt="" />
      </JourneyLogo>
    </JourneyHeaderContainer>
  );
};

export default JourneyHeader;

const JourneyHeaderContainer = styled.div`
  /* padding-top: 45px; */
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`;
const JourneyTitle = styled.div`
  width: 34%;
  padding-top: 100px;
  padding-left: 60px;
  @media (max-width: 1024px) {
    padding-left: 40px;
  }
  h1 {
    font-size: 48px;
    font-weight: 500;
  }
  h2 {
    position: absolute;
    font-size: 40px;
    margin-top: 42px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding-top: 10px;
    padding-left: 0;
    h1 {
      font-size: 28px;
    }
    h2 {
      font-size: 28px;
      position: relative;
    }
  }
`;
const JourneyLogo = styled.div``;
