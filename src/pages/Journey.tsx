import JourneyHeader from "../components/journey/JourneyHeader";
import JourneyDetails from "../components/journey/JourneyDetails";
import JourneyList from "../components/journey/JourneyList";

const Journey = () => {
  return (
    <section>
      <div>
        <JourneyHeader />
        <JourneyDetails />
        <JourneyList />
      </div>
    </section>
  );
};

export default Journey;
