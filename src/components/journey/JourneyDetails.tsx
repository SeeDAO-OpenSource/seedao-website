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
  padding-bottom: 50px;
  list-style: none;
  li {
    padding: 16px 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 31px;
  }
  @media (max-width: 768px) {
    width: 88%;
    margin: 30px auto 0;
    li {
      /* padding: 16px 0; */
      font-size: 14px;
      line-height: 1.5em;
    }
  }
`;
