import IndexHeder from "../components/Heder/IndexHeder";
import SdkDevelopment from "../components/Pages/SdkDevelopment/SdkDevelopment";
import TextInformation from "../components/TextInformation/TextInformation";
import Reviews from "../components/Reviews/Reviews";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback";
import ProjectsSlider from "../components/ProjectsSlider/ProjectsSlider";
import Faqs from "../components/Faqs/Faqs";

const SdkPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <SdkDevelopment />
        <TextInformation />
        <Reviews />
        <ServicesPages />
        <Partner />
        <TextInformation />
        <Feedback />
        <ProjectsSlider />
        <Faqs />
      </main>
    </>
  );
};

export default SdkPages;
