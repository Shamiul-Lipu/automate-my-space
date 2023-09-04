import Banner from "./Banner";
import FAQ from "./FAQ";
import MobileApp from "./Mobile";
import NewAI from "./NewAI";
import Partners from "./Partners";
import Services from "./Services";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <div className="bg-gray-900">
      <Banner />
      <Services />
      <Partners />
      <Stats />
      <NewAI />
      <MobileApp />
      <FAQ />
    </div>
  );
};

export default HomePage;
