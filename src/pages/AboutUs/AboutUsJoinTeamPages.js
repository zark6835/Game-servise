import IndexHeder from "../../components/Heder/IndexHeder";
import AboutUsJoinTeam from "../../components/Pages/AboutUs/AboutUsJoinTeam/AboutUsJoinTeam";
import DropDownList from "../../components/DropDownList/DropDownList";
import JoinTeamForm from "../../components/Pages/AboutUs/AboutUsJoinTeam/JoinTeamForm/JoinTeamForm";
import { Route, Routes } from "react-router-dom";

const AboutUsJoinTeamPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AboutUsJoinTeam/>
        <DropDownList/>
      </main>
      <Routes>
        <Route path="form" element={<JoinTeamForm/>}/>
      </Routes>
    </>
  );
};

export default AboutUsJoinTeamPages;