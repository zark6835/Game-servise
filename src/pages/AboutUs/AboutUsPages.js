import IndexHeder from "../../components/Heder/IndexHeder";
import Partner from "../../components/Partner/Partner";
import Feedback from "../../components/Feedback/Feedback"
import AboutUs from "../../components/Pages/AboutUs/AboutUs";
import TeamCard from "../../components/TeamCard/TeamCard";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";

const AboutUsPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AboutUs/>
        <TeamCard/>
        <Partner/>
        <Feedback/>
        <ProjectsSlider/>
      </main>
    </>
  );
};

export default AboutUsPages;