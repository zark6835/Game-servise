import IndexHeder from "../components/Heder/IndexHeder";
import SdkDevelopment from "../components/Pages/SdkDevelopment/SdkDevelopment";
import TextInformation from "../components/TextInformation/TextInformation";
import Reviews from "../components/Reviews/Reviews";
import ServicesPages from "../components/ServicesPages/ServicesPages";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"

const SdkPages = () => {
    return ( 
        <>
            <IndexHeder/>
            <main>
                <SdkDevelopment/>
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
 
export default SdkPages;