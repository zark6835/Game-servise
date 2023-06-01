import IndexHeder from "../../components/Heder/IndexHeder";
import Reviews from "../../components/Reviews/Reviews";
import TextInformation from "../../components/TextInformation/TextInformation";
import ServicesPages from "../../components/ServicesPages/ServicesPages";
import Partner from "../../components/Partner/Partner";
import Feedback from "../../components/Feedback/Feedback"
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import Faqs from "../../components/Faqs/Faqs";
import UnityTechnologies from "../../components/Pages/Technologies/UnityTechnologies/UnityTechnologies";


const UnityPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <UnityTechnologies/>
        <TextInformation/>
        <Reviews/>
        <ServicesPages/>
        <Partner/>
        <TextInformation/>
        <Feedback/>
        <ProjectsSlider/>
        <Faqs/>
      </main>
    </>
  );
};

export default UnityPages;
