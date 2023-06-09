import IndexHeder from "../../components/Heder/IndexHeder";
import Partner from "../../components/Partner/Partner";
import Feedback from "../../components/Feedback/Feedback"
import AboutUsTeam from "../../components/Pages/AboutUs/AboutUsTeam/AboutUsTeam";
import TeamCard from "../../components/TeamCard/TeamCard";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";

const AboutUsPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AboutUsTeam/>
        <TeamCard/>
        <Partner/>
        <Feedback/>
        <ProjectsSlider/>
      </main>
    </>
  );
};

export default AboutUsPages;