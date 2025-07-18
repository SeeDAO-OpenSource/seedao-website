import buildBanner from '../../assets/build/build-banner.svg';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const BuildHeader = () => {
  const { t } = useTranslation();
  return (
    <JourneyHeaderContainer>
      <CenterBox>
        <JourneyTitle>
          <div className="h1">{t('Build')}</div>
          <div className="h2">{t('Build-Content-1')}</div>
        </JourneyTitle>
      </CenterBox>
    </JourneyHeaderContainer>
  );
};

export default BuildHeader;

const CenterBox = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: url(${buildBanner}) no-repeat 100% center;
  width: 100%;
  @media (max-width: 768px) {
    background: url(${buildBanner}) no-repeat top center;
    background-size: 100%;
  }
`;

const JourneyHeaderContainer = styled.div`
  /* padding-top: 45px; */
  background:
    linear-gradient(181deg, #e0ffff 0.85%, #fbf5ef 95.53%),
    linear-gradient(180deg, #cdcbff 0%, #fbf5ef 100%);
  display: flex;
`;
const JourneyTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 130px 106px 217px 10vw;
  width: 40%;
  flex-shrink: 0;
  font-family: 'Inter-Medium';
  .h1 {
    font-size: 32px;
    font-weight: 500;
    text-transform: uppercase;
  }
  .h2 {
    font-size: 40px;
    margin-top: 42px;
    font-weight: 500;
    line-height: 51px;
  }
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 81%;
    text-align: center;
    padding-top: 280px;
    .h1 {
      font-size: 16px;
    }
    .h2 {
      font-size: 16px;
      line-height: 27px;
      margin-top: 25px;
    }
  }
`;
