import logo from "../../assets/img/footer-logo.png";
import facebook from "../../assets/img/content/footer/footer-facebook.svg";
import linkedin from "../../assets/img/content/footer/footer-linkedin.svg";
import whatsApp from "../../assets/img/content/footer/footer-whatsApp.svg";
import skype from "../../assets/img/content/footer/footer-skype.svg";
import github from "../../assets/img/content/footer/footer-github.svg";

import "./footer-styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__list-margin">
        <ul className="footer__list-wrapper container">
          <li className="footer__list-social">
            <a href="#">
              <img src={logo} alt="" />
            </a>
            <ul className="footer__list-item-social">
              <li>
                <a href="#">
                  <img src={facebook} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={whatsApp} alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={skype} alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/zark6835">
                  <img src={github} alt="" />
                </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="footer__list">
              <h2 className="footer-title">SERVICES</h2>
            </div>
            <ul className="footer__list-item">
              <li>
                <a className="footer-paragraph" href="#">MOBILE APPLICATION DEVELOPMENT</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">GAME DEVELOPMENT OUTSOURCING</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">VR APP DEVELOPMENT</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">DEDICATED DEVELOPERS</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">SDK DEVELOPMENT</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">3D MODELING SERVICES</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">AR APP DEVELOPMENT</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="footer__list">
              <h2 className="footer-title">TECHNOLOGIES</h2>
            </div>
            <ul className="footer__list-item">
              <li>
                <a className="footer-paragraph" href="#">ANDROID</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">IOS</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">UNITY</a>
              </li>
            </ul>
          </li>
          <li>
            <ul className="footer__list-title">
              <li className="">
                <a className="footer-title" href="#">PRODUCTS</a>
              </li>
              <li className="">
                <a className="footer-title" href="#">PORTFOLIO</a>
              </li>
              <li className="">
                <a className="footer-title" href="#">BLOG</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="footer__list">
              <h2 className="footer-title">ABOUT US</h2>
            </div>
            <ul className="footer__list-item">
              <li>
                <a className="footer-paragraph" href="#">CONTACTS</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">TEAM</a>
              </li>
              <li>
                <a className="footer-paragraph" href="#">JOIN THE TEAM</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="copyright ">
        <div className="copyright-wrapper container">
          <p className="copyright-paragraph">
            © 2021 - Stan’s Assets. All Right Reserved
          </p>
          <div className="copyright-padding">
            <p className="copyright-paragraph">Privacy policy</p>
            <p className="copyright-paragraph">Cookies policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
