import contacst__location from '../../assets/img/content/contacsts/contacts-location.png'
import contacst__tel from '../../assets/img/content/contacsts/contacts-tel.png'
import contacst__whatsApp from '../../assets/img/content/contacsts/contacts-whatsApp.png'
import contacst__skype from '../../assets/img/content/contacsts/contacts-skype.png'
import contacst__email from '../../assets/img/content/contacsts/contacts-email.png'
import contacst__facebook from '../../assets/img/content/contacsts/contacts-facebook.png'

import "./feedback.scss";

const Contacst = () => {
  return (
    <section className="contacst">
      <h2 className="header2">CONTACTS</h2>

      <div className="contacst__information">
        <h3 className="contacst__information-subtitle">
          We are open for dialog and you are welcome to share your opinions or
          thoughts with us
        </h3>
        <p className="contacst__information-paragraph">
          Hit us up any time through email with any idea and help us turn your
          great ideas into brilliant projects
        </p>
      </div>

      <div className="contacst__wrapper">
        <ul className="contacst__list">
          <li className='contacst__list-item-wrapper'>
            <img src={contacst__location} alt="" />
            <p className="contacst__list-item ">
              Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
            </p>
          </li>
          <li className='contacst__list-item-wrapper'>
            <img src={contacst__tel} alt="" />
            <a className="contacst__list-item" href="tel:+38 (093) 345 56 76">
              +38 (093) 345 56 76
            </a>
          </li>
          <li className='contacst__list-item-wrapper'>
            <img src={contacst__whatsApp} alt="" />
            <a className="contacst__list-item" href="tel:+38 (093) 345 56 77">
              +38 (093) 345 56 77
            </a>
          </li>
          <li className='contacst__list-item-wrapper'>
            <img src={contacst__skype} alt="" />
            <a className="contacst__list-item" href="Stanassets">
              Stanassets
            </a>
          </li>
          <li className='contacst__list-item-wrapper'>
            <img src={contacst__email} alt="" />
            <a className="contacst__list-item" href="stanAssets@gmail.com">
              stanAssets@gmail.com
            </a>
          </li>
          <li className='contacst__list-item-wrapper'>
            <img src={contacst__facebook} alt="" />
            <a
              className="contacst__list-item"
              href="http://facebook.com/Stanassets"
            >
              facebook.com/Stanassets
            </a>
          </li>
        </ul>
        <form className="contacst__form">
          <div className="contacst__form-wrapper">
            <input
              className="contacst__form-input"
              type="text"
              placeholder="Name"
            />
            <input
              className="contacst__form-input"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              className="contacst__form-input message"
              type="text"
              placeholder="Message"
            />
          </div>
          <button className="contacst__form-btn">Send request</button>
        </form>
      </div>
    </section>
  );
};

export default Contacst;
