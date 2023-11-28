import styled from "styled-components";

const IntroDetail = () => {
  return (
    <IntroDetails>
      <li>
        SeeDAO is a digital city-state, a decentralized, autonomous world for
        the pursuit of the "good life".
      </li>
      <li>
        In terms of concrete form, the city-state consists of a unified
        cyberspace and geographically dispersed physical nodes. In the pursuit
        of the "good life", the goodness of the city-state is manifested in
        three ways: facilitating connections between people; promoting the inner
        discovery and emergence of the individual; and providing a public life
        that is beneficial to all.
      </li>
      <li>
        The overarching program of the City State is the SeeDAO White Book, and
        the highest principles of governance are the SeeDAO Meta Rules. If you
        want to enter the world, this is the first document you need to read, as
        it represents the fundamental rules of the game.
      </li>
      <li>
        You can access SeeDAO's cyberspace through the SeeDAO App, or you can
        access SeeDAO's real physical nodes through the SeeDAO Global Network.
        The SeeDAO Town Hall and Incubator will be parts of SeeDAO that you will
        need to know about if you need to call upon the resources of the
        city-state and participate in its governance.
      </li>
      <li>
        SeeDAO is the home of the builders. This world is built, governed and
        shared by builder's and is open to all who share this vision. Let's
        build a city of sunrise in Cyberworld at the midnight of the world.
        enjoy~
      </li>
    </IntroDetails>
  );
};

export default IntroDetail;

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
