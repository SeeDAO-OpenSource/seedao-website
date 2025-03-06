import JourneyHeader from '../components/journey/JourneyHeader';
import JourneyDetails from '../components/journey/JourneyDetails';
import JourneyList from '../components/journey/JourneyList';
import PageMeta from '../components/SEO/PageMeta';

const Journey = () => {
  // Define structured data for the journey page
  const journeyStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'SEEDAO - Journey',
    description:
      'Explore the journey of SEEDAO, from its inception to its current state. Learn about our milestones and achievements in the Web3 ecosystem.',
    url: 'https://seedao.xyz/journey',
    mainEntity: {
      '@type': 'Article',
      headline: 'SEEDAO Journey',
      description: 'The evolution and milestones of SEEDAO in the decentralized ecosystem.',
      publisher: {
        '@type': 'Organization',
        name: 'SEEDAO',
        logo: 'https://seedao.xyz/logo192.png',
      },
    },
  };

  return (
    <section>
      <PageMeta
        title="SEEDAO - Journey | Our Evolution and Milestones"
        description="Explore the journey of SEEDAO, from its inception to its current state. Learn about our milestones and achievements in the Web3 ecosystem."
        canonicalPath="/journey"
        structuredData={journeyStructuredData}
      />
      <div>
        <JourneyHeader />
        <JourneyDetails />
        <JourneyList />
      </div>
    </section>
  );
};

export default Journey;
