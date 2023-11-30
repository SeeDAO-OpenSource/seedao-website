import styled from "styled-components";
import { useTranslation } from "react-i18next";

const JourneyDetails = () => {
  const { t } = useTranslation();
  return (
    <IntroDetails>
      <li>{t("Journey-Content-2")}</li>
      <li>{t("Journey-Content-3")}</li>
      <li>{t("Journey-Content-4")}</li>
      <li>{t("Journey-Content-5")}</li>
      <li>{t("Journey-Content-6")}</li>
      <li>{t("Journey-Content-7")}</li>
    </IntroDetails>
  );
};

export default JourneyDetails;

const IntroDetails = styled.ul`
  max-width: 900px;
  margin: 0 auto;
  list-style: none;
  padding: 0 20px;
  li {
    padding: 16px 0;
    font-size: 20px;
    font-weight: 400;
  }
  @media (max-width: 768px) {
    max-width: 660px;
    li {
      /* padding: 16px 0; */
      font-size: 18px;
    }
  }
`;
