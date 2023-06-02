import { productsCardData } from "../../data/productsCardData";

import "./products-card.scss";

const ProductsCard = () => {
  return (
    <section className="products">
      <div className="products__bg">
        <ul className="products__list">
          {productsCardData.map((item) => (
            <li className="products__list-item">
              <img className="products__list-item_img" src={item.img} alt="" />
              <div className="products__list-item_information">
                <h3 className="header3">{item.title}</h3>
                <p className="body">{item.paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductsCard;
