import { Formik, Form } from "formik";
import { InputForm, SignupSchema } from "../../../../helpers/form/InputForm";

import "../../pages-style.scss";
import "./about-us-contacts.scss";

import contacts__location from "../../../../assets/img/content/feedback/contacts-location.png";
import contacts__tel from "../../../../assets/img/content/feedback/contacts-tel.png";
import contacts__whatsApp from "../../../../assets/img/content/feedback/contacts-whatsApp.png";
import contacts__skype from "../../../../assets/img/content/feedback/contacts-skype.png";
import contacts__email from "../../../../assets/img/content/feedback/contacts-email.png";
import contacts__facebook from "../../../../assets/img/content/feedback/contacts-facebook.png";

const AboutUsContacts = () => {
  return (
    <section>
      <div className="pages container">
        <div className="pages__wrapper">
          <p className="body color">
            About Us<span></span>Contact Us
          </p>
          <div>
            <h2 className="header1 color">Contact Us</h2>
            <h3 className="body">
              We are open for dialog and you are welcome to share your opinions
              or thoughts with us
            </h3>
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(value) => {
            console.log(value);
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form className="contacts__form-min">
              <label className="form__input-label">
                <p className="form__input-error">
                  {errors.name && touched.name && errors.name}
                </p>
                <InputForm
                  name={"name"}
                  className={`form__input-line ${
                    errors.name && touched.name ? "error" : ""
                  }`}
                  type={"text"}
                  placeholder={"Full Name"}
                  onChange={handleChange}
                  value={values.name}
                />
              </label>
              <label className="form__input-label">
                <p className="form__input-error">
                  {errors.email && touched.email && errors.email}
                </p>
                <InputForm
                  name={"email"}
                  className={`form__input-line ${
                    errors.email && touched.email ? "error" : ""
                  }`}
                  type={"email"}
                  placeholder={"Email"}
                  onChange={handleChange}
                  value={values.email}
                />
              </label>
              <InputForm
                name={"message"}
                className={"form__input-message"}
                type={"text"}
                placeholder={"Message"}
                onChange={handleChange}
              />
              <button className="form__input-button button-form" type="submit">
                Send request
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="contacts__link">
        <div className="contacts__link-wrapper container">
          <ul className="contacts__link-list">
            <li className="contacts__list-item-wrapper">
              <img src={contacts__location} alt="" />
              <p className="contacts__list-item ">
                Ukraine, Kyiv, Rodyny Kristeriv 20B, office 188
              </p>
            </li>
            <li className="contacts__list-item-wrapper">
              <img src={contacts__tel} alt="" />
              <a className="contacts__list-item" href="tel:+38 (093) 345 56 76">
                +38 (093) 345 56 76
              </a>
            </li>
            <li className="contacts__list-item-wrapper">
              <img src={contacts__whatsApp} alt="" />
              <a className="contacts__list-item" href="tel:+38 (093) 345 56 77">
                +38 (093) 345 56 77
              </a>
            </li>
          </ul>
          <ul className="contacts__link-list">
            <li className="contacts__list-item-wrapper">
              <img src={contacts__skype} alt="" />
              <a className="contacts__list-item" href="#">
                Stanassets
              </a>
            </li>
            <li className="contacts__list-item-wrapper">
              <img src={contacts__email} alt="" />
              <a
                className="contacts__list-item"
                href="mailto:stanAssets@gmail.com"
              >
                stanAssets@gmail.com
              </a>
            </li>
            <li className="contacts__list-item-wrapper">
              <img src={contacts__facebook} alt="" />
              <a
                className="contacts__list-item"
                href="http://facebook.com/Stanassets"
              >
                facebook.com/Stanassets
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContacts;
