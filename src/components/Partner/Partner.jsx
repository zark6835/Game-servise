import { Link } from "react-router-dom";
import "./partner.scss";

const Partner = () => {
  return (
    <section className="partner">
      <h2 className="header1 partner__title">
        LOOKING FOR A PARTNER IN BUILDING A SOLUTION?
      </h2>
      <p className="partner__paragraph">
        We are ready to discuss your project requirements
      </p>
      <div className="partner__btn-wrapepr">
        <a href="/aboutUs-contacts" className="partner__btn button-green">
          Let’s talk
        </a>
      </div>
    </section>
  );
};

export default Partner;
