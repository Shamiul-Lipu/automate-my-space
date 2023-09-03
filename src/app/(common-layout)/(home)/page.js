import Banner from "./Banner";
import MobileApp from "./Mobile";
import NewAI from "./NewAI";
import Partners from "./Partners";
import Services from "./Services";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Services />
      <Partners />
      <Stats />
      <NewAI />
      <MobileApp />
    </>
  );
};

export default HomePage;
