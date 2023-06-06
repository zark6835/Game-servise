import IndexHeder from "../../components/Heder/IndexHeder";
import Partner from "../../components/Partner/Partner";
import Feedback from "../../components/Feedback/Feedback"
import Portfolio from "../../components/Pages/Portfolio/Portfolio";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

const ProductsPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <Portfolio/>
        <PortfolioCard/>
        <Partner/>
        <Feedback/>
      </main>
    </>
  );
};

export default ProductsPages;
