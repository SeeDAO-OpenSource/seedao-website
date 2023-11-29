import styled from "styled-components";

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const HeaderLeft = styled.div`
  padding-top: 40px;
  padding-left: 60px;
  @media (max-width: 768px) {
    text-align: center;
    padding-left: 0px;
  }
`;
export const HeaderTitle = styled.h1`
  font-size: 65px;
  max-width: 400px;
  @media (max-width: 1024px) {
    font-size: 50px;
    max-width: 300px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const JoinButton = styled.button`
  border: none;
  background-color: #a6a2f9;
  color: #000;
  font-size: 18px;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 40px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeaderImg = styled.div`
  flex: 2;
  max-width: 900px;
  margin-left: 20px;
  margin-inline: auto;
  @media (max-width: 768px) {
    order: 1;
  }
`;
