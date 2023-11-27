import styled from "styled-components";

export const ListsSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 85px 110px 55px 110px;
  gap: 24px;
  @media (max-width: 768px) {
    padding: 85px 20px 55px 20px;
  }
`;

export const List = styled.div`
  text-align: center;
  line-height: 54px;
  h3 {
    font-size: 32px;
    font-weight: 700px;
  }

  a {
    color: #111;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
  }
`;
export const Image = styled.img`
  max-width: 200px;
  margin-bottom: 6px;
`;
