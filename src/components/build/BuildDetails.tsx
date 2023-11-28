import styled from "styled-components";

const BuildDetails = () => {
  return (
    <IntroDetails>
      <li>
        You'll wonder how this city-state connecting tens of thousands of people
        and thousands of Builders was actually built.
      </li>
      <li>
        Without a company behind us, how on earth did we form a cultural and
        technical community that has allowed so many apps and events to be born
        here and expanded our reach globally?
      </li>
      <li>That's right, it's all thanks to the Builders.</li>
      <li>
        SeeDAO is a digital city-state built by community members, in which
        important building projects and resolutions form SIPs.Besides SIPs, P1,
        P2 and P3 proposals also play an important role in community building.
        Looking back at these building proposals, you can clearly see the
        history of SeeDAO.
      </li>
      <li>
        Looking forward to you leaving your own proposal in the city-state, let
        your name be part of this world too!
      </li>
    </IntroDetails>
  );
};

export default BuildDetails;

const IntroDetails = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  list-style: none;
  padding: 0 20px;
  li {
    padding: 16px 0;
    font-size: 20px;
  }
  @media (max-width: 768px) {
    max-width: 660px;
    li {
      /* padding: 16px 0; */
      font-size: 18px;
    }
  }
`;
