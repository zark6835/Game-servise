import IndexHeder from "../components/Heder/IndexHeder";
import GameDevelopment from "../components/Pages/GameDevelopment/GameDevelopment";
import TextInformation from "../components/TextInformation/TextInformation";
import Reviews from "../components/Reviews/Reviews";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"

const GamePages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <GameDevelopment />
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

export default GamePages;
