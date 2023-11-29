import styled from "styled-components";
import { Container } from "../style/Global.style";
import BuildHeader from "../components/build/BuildHeader";
import BuildDetails from "../components/build/BuildDetails";
import seedao from "../assets/build/build-seedao.svg";

const Build = () => {
  return (
    <BuildSection>
      <Container>
        <BuildHeader />
        <BuildDetails />
        <List>
          <Image src={seedao} />
          <p>SeeDAO App</p>
        </List>
      </Container>
    </BuildSection>
  );
};

export default Build;

const BuildSection = styled.section`
  background: linear-gradient(181deg, #e0ffff 0.85%, #fbf5ef 95.53%),
    linear-gradient(180deg, #cdcbff 0%, #fbf5ef 100%);
`;
const List = styled.div`
  max-width: 380px;
  border-radius: 16px;
  box-shadow: 2px 5px 12px -13px rgba(201, 176, 151, 0.04);
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 30px 10px 30px 10px;
  margin: 50px 40px;
  font-size: 20px;
  border-radius: 16px;
  background: linear-gradient(180deg, #e4fef5 0%, #fbf5ef 100%);
  box-shadow: 2px 5px 12px -13px rgba(201, 176, 151, 0.04);
  @media (max-width: 768px) {
    padding: 20px 5px 20px 10px;
    font-size: 14px;
    margin: 30px 20px;
    /* margin: 0 auto; */
  }
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
