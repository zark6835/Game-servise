import IndexHeder from "../../components/Heder/IndexHeder";
import Partner from "../../components/Partner/Partner";
import Feedback from "../../components/Feedback/Feedback"
import TeamCard from "../../components/TeamCard/TeamCard";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import AboutUsJoinTeam from "../../components/Pages/AboutUs/AboutUsJoinTeam/AboutUsJoinTeam";

const AboutUsJoinTeamPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AboutUsJoinTeam/>
        <TeamCard/>
        <Partner/>
        <Feedback/>
        <ProjectsSlider/>
      </main>
    </>
  );
};

export default AboutUsJoinTeamPages;