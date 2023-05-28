import IndexHeder from "../components/Heder/IndexHeder";
import DedicatedDevelopers from "../components/Pages/DedicatedDevelopers/DedicatedDevelopers";
import TextInformation from "../components/TextInformation/TextInformation";
import Reviews from "../components/Reviews/Reviews";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"

const DedicatedPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <DedicatedDevelopers />
        <TextInformation/>
        <Reviews/>
        <ServicesPages/>
        <Partner/>
        <TextInformation/>
        <Feedback/>
      </main>
    </>
  );
};

export default DedicatedPages;
