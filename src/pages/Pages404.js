import IndexHeder from "../components/Heder/IndexHeder";
import Partner from "../components/Partner/Partner";
import Feedback from "../components/Feedback/Feedback"
import Img404 from "../components/Pages/Img404/Img404";

const Pages404 = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <Img404/>
        <Partner/>
        <Feedback/>
      </main>
    </>
  );
};

export default Pages404;