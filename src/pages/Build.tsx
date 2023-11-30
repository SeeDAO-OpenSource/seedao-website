import BuildHeader from "../components/build/BuildHeader";
import BuildDetails from "../components/build/BuildDetails";
import { useTranslation } from "react-i18next";
import Buildlist from "../components/build/buildlist";

const Build = () => {
  const { t } = useTranslation();
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

