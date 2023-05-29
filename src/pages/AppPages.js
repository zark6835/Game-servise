import IndexHeder from "../components/Heder/IndexHeder";
import AppDevelopment from "../components/Pages/AppDevelopment/AppDevelopment";
import Reviews from "../components/Reviews/Reviews";
import TextInformation from "../components/TextInformation/TextInformation";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"
import Projects from "../components/Projects/Projects";

const AppPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <AppDevelopment />
        <TextInformation/>
        <Reviews/>
        <ServicesPages/>
        <Partner/>
        <TextInformation/>
        <Feedback/>
        <Projects/>
      </main>
    </>
  );
};

export default AppPages;
