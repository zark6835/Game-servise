import IndexHeder from "../../components/Heder/IndexHeder";
import Partner from "../../components/Partner/Partner";
import ProjectsSlider from "../../components/ProjectsSlider/ProjectsSlider";
import AboutUsContacts from "../../components/Pages/AboutUs/AboutUsContacts/AboutUsContacts";

const AboutUsContactsPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AboutUsContacts/>
        <Partner/>
        <ProjectsSlider/>
      </main>
    </>
  );
};

export default AboutUsContactsPages;