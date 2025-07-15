import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Tos = () => {
  const { t } = useTranslation();
  return (
    <IntroDetails>
      <h5 className="card-title">{t('TOS-Title')}</h5>
      <p className="text-muted">{t('TOS-P1')}</p>

      <h5 className="card-title">{t('TOS-S1-Title')}</h5>
      <p className="text-muted">{t('TOS-S1-P1')}</p>
      <p className="text-muted">{t('TOS-S1-P2')}</p>

      <h5 className="card-title">{t('TOS-S2-Title')}</h5>
      <p className="text-muted">{t('TOS-S2-P1')}</p>
      <p className="text-muted">{t('TOS-S2-P2')}</p>
      <p className="text-muted">{t('TOS-S2-P3')}</p>
    </IntroDetails>
  );
};

export default Tos;

const IntroDetails = styled.ul`
  max-width: 900px;
  margin: 100px auto;
  padding-bottom: 50px;
  line-height: 2em;
  font-size: 20px;
  font-weight: 400;
  @media (max-width: 768px) {
    width: 88%;
    margin: 100px auto 0;
    font-size: 14px;
    line-height: 1.5em;
  }
`;
