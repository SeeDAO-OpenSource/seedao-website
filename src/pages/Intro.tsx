import IntroDetail from '../components/intro/IntroDetail';
import IntroHeader from '../components/intro/IntroHeader';
import IntroList from '../components/intro/IntroList';
import styled from 'styled-components';
import PageMeta from '../components/SEO/PageMeta';

const Intro = () => {
  // Define structured data for the intro page
  const introStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SEEDAO - Introduction',
    description:
      'Learn about SEEDAO, a decentralized autonomous organization dedicated to fostering innovation and collaboration in the Web3 ecosystem.',
    url: 'https://seedao.xyz/intro',
    mainEntity: {
      '@type': 'Article',
      headline: 'Introduction to SEEDAO',
      description:
        "Learn about SEEDAO's mission, vision, and how we're building a decentralized future.",
      publisher: {
        '@type': 'Organization',
        name: 'SEEDAO',
        logo: 'https://seedao.xyz/logo192.png',
      },
    },
  };

  return (
    <IntroSection>
      <PageMeta
        title="SEEDAO - Introduction | Learn About Our Mission and Vision"
        description="Learn about SEEDAO, a decentralized autonomous organization dedicated to fostering innovation and collaboration in the Web3 ecosystem."
        canonicalPath="/intro"
        structuredData={introStructuredData}
      />
      <div>
        <IntroHeader />
        <IntroDetail />
        <IntroList />
      </div>
    </IntroSection>
  );
};

export default Intro;

const IntroSection = styled.section``;
