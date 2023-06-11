import IndexHeder from "../../components/Heder/IndexHeder";
import AboutUsJoinTeam from "../../components/Pages/AboutUs/AboutUsJoinTeam/AboutUsJoinTeam";
import DropDownList from "../../components/DropDownList/DropDownList";

const AboutUsJoinTeamPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AboutUsJoinTeam/>
        <DropDownList/>
      </main>
    </>
  );
};

export default AboutUsJoinTeamPages;