import contacts__location from '../../assets/img/content/feedback/contacts-location.png'
import contacts__tel from '../../assets/img/content/feedback/contacts-tel.png'
import contacts__whatsApp from '../../assets/img/content/feedback/contacts-whatsApp.png'
import contacts__skype from '../../assets/img/content/feedback/contacts-skype.png'
import contacts__email from '../../assets/img/content/feedback/contacts-email.png'
import contacts__facebook from '../../assets/img/content/feedback/contacts-facebook.png'

import "./feedback.scss";

const contacts = () => {
  return (
    <section className="contacts">
      <h2 className="header2">CONTACTS</h2>

      <div className="contacts__information">
        <h3 className="contacts__information-subtitle">
          We are open for dialog and you are welcome to share your opinions or
          thoughts with us
        </h3>
        <p className="contacts__information-paragraph">
          Hit us up any time through email with any idea and help us turn your
          great ideas into brilliant projects
        </p>
      </div>

      <div className="contacts__wrapper">
        <ul className="contacts__list">
          <li className='contacts__list-item-wrapper'>
            <img src={contacts__location} alt="" />
            <p className="contacts__list-item ">
              Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
            </p>
          </li>
          <li className='contacts__list-item-wrapper'>
            <img src={contacts__tel} alt="" />
            <a className="contacts__list-item" href="tel:+38 (093) 345 56 76">
              +38 (093) 345 56 76
            </a>
          </li>
          <li className='contacts__list-item-wrapper'>
            <img src={contacts__whatsApp} alt="" />
            <a className="contacts__list-item" href="tel:+38 (093) 345 56 77">
              +38 (093) 345 56 77
            </a>
          </li>
          <li className='contacts__list-item-wrapper'>
            <img src={contacts__skype} alt="" />
            <a className="contacts__list-item" href="#">
              Stanassets
            </a>
          </li>
          <li className='contacts__list-item-wrapper'>
            <img src={contacts__email} alt="" />
            <a className="contacts__list-item" href="mailto:stanAssets@gmail.com">
              stanAssets@gmail.com
            </a>
          </li>
          <li className='contacts__list-item-wrapper'>
            <img src={contacts__facebook} alt="" />
            <a
              className="contacts__list-item"
              href="http://facebook.com/Stanassets"
            >
              facebook.com/Stanassets
            </a>
          </li>
        </ul>
        <form className="contacts__form">
          <div className="contacts__form-wrapper">
            <input
              className="form__input-line"
              type="text"
              placeholder="Name"
            />
            <input
              className="form__input-line"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <input
              className="form__input-message"
              type="text"
              placeholder="Message"
            />
          </div>
          <button className="button-form">Send request</button>
        </form>
      </div>
    </section>
  );
};

export default contacts;
