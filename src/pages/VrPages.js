import IndexHeder from "../components/Heder/IndexHeder";
import VrDevrlopment from "../components/Pages/VrDevrlopment/VrDevrlopment";
import TextInformation from "../components/TextInformation/TextInformation";
import Reviews from "../components/Reviews/Reviews";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"

const VrPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <VrDevrlopment/>
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

export default VrPages;
