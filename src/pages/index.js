import HomeHeder from "../components/Heder/HomeHeder";
import MainSlider from "../components/MainSlider/MainSlider";
import Technologies from "../components/Technologies/Technologies";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";
import Partner from "../components/Partner/Partner";
import Achievements from "../components/Achievements/Achievements";
import Partners from "../components/Partners/Partners";
import Contacst from "../components/Feedback/Feedback";

const Index = () => {
  return (
    <>
      <HomeHeder />
      <main>
        <MainSlider />
        <Technologies />
        <Reviews />
        <Services />
        <Partner />
        <Achievements />
        <Partners />
        <Contacst />
      </main>
    </>
  );
};

export default Index;
