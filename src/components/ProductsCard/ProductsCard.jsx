import { productsCardData } from "../../data/productsCardData";

import "./products-card.scss";

import unity from '../../assets/img/content/products/products-card-link-unity.png'
import github from '../../assets/img/content/products/products-card-link-github.png'

const ProductsCard = () => {

  //Функція яка спрацьовує при наведені на картку
  const handleMouseOver = (event) => {
    let target = event.target;

    // Перевіряємо чи теперешній елемент дорівнює li
    while (target && target.tagName !== "LI") {
      // Якщо ні то переходемо до батьківського елементу
      target = target.parentElement;
    }
  
    // Перевіряємо що знайшли элемент li
    if (target && target.tagName === "LI") {
      //Видаляємо класс closed__link та додаємо open__link 
      target.querySelector('.products__list-item_link').classList.remove('closed__link')
        target.querySelector('.products__list-item_link').classList.add("open__link")
      //При відведені миші з картки заберається класс open__link та додається closed__link
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
             // Елементу li присвоїна подія onMouseOver
            <li className="products__list-item" onMouseOver={handleMouseOver}>
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
