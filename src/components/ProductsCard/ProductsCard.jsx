import { productsCardData } from "../../data/productsCardData";

import "./products-card.scss";

import unity from '../../assets/img/content/products/products-card-link-unity.png'
import github from '../../assets/img/content/products/products-card-link-github.png'

const ProductsCard = () => {

  const handleMouseOver = (event) => {
    let target = event.target;

    // Проверяем, является ли текущий элемент li
    while (target && target.tagName !== "LI") {
      // Если нет, переходим к родительскому элементу
      target = target.parentElement;
    }
  
    // Проверяем, что нашли элемент li
    if (target && target.tagName === "LI") {
      console.log(target);
      target.querySelector('.products__list-item_link').classList.remove('closed__link')
        target.querySelector('.products__list-item_link').classList.add("open__link")

        target.addEventListener('mouseout', () =>{
          target.querySelector('.products__list-item_link').classList.remove('open__link')
          target.querySelector('.products__list-item_link').classList.add("closed__link")
        })
    }
  }

  return (
    <section className="products">
      <div className="products__bg">
        <ul className="products__list">
          {productsCardData.map((item) => (
            <li onMouseOver={handleMouseOver} className="products__list-item">
              <div className="products__list-item_wrapper">
                <img className="products__list-item_img" src={item.img} alt="" />
                <div className="products__list-item_link closed__link">
                  <a href={item.unityLink} className="products__list-item_link__border">
                    <img src={unity} alt="unity" />
                  </a>
                  <a href={item.githubLink}>
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
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
