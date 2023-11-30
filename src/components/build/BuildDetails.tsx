import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BuildDetails = () => {
  const { t } = useTranslation();
  return (
    <IntroDetails>
      <li>{t("Build-Content-1")}</li>
      <li>{t("Build-Content-2")}</li>
      <li>{t("Build-Content-3")}</li>
      <li>{t("Build-Content-4")}</li>
      <li>{t("Build-Content-5")}</li>
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
