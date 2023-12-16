import BuildHeader from "../components/build/BuildHeader";
import BuildDetails from "../components/build/BuildDetails";
import Buildlist from "../components/build/buildlist";

const Build = () => {
  return (
    <section>
      <div>
        <BuildHeader />
        <BuildDetails />
        <Buildlist />
      </div>
    </section>
  );
};

export default Build;

