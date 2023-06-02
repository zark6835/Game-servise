import IndexHeder from "../../components/Heder/IndexHeder";
import Products from "../../components/Pages/Products/Products";
import ProductsCard from "../../components/ProductsCard/ProductsCard";
import Partner from "../../components/Partner/Partner";
import Feedback from "../../components/Feedback/Feedback"

const ProductsPages = () => {
  return (
    <>
      <IndexHeder />
      <main>
        <Products/>
        <ProductsCard/>
        <Partner/>
        <Feedback/>
      </main>
    </>
  );
};

export default ProductsPages;
