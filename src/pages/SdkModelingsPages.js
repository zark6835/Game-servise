import IndexHeder from "../components/Heder/IndexHeder";
import SdkModelings from "../components/Pages/SdkModelings/SdkModelings";
import TextInformation from "../components/TextInformation/TextInformation";
import Reviews from "../components/Reviews/Reviews";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"

const SdkModelingsPages = () => {
    return ( 
        <>
            <IndexHeder/>
            <main>
                <SdkModelings/>
                <TextInformation/>
                <Reviews/>
                <ServicesPages/>
                <Partner/>
                <TextInformation/>
                <Feedback/>
            </main>
        </>
     );
}
 
export default SdkModelingsPages;