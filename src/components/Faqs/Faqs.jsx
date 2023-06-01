import { faqsDataQuestions, faqsData } from "../../data/faqsData";

import "./faqs.scss";

const Faqs = () => {
  return (
    <section className="faqs">
      <h2 className="header2">FAQ’s</h2>
      <ul className="faqs__questions-list">
        {faqsDataQuestions.map((item) => (
          <li className="faqs__questions-list_item">
            <a className="faqs__questions-list_item_link" href="#">
              {item.questions}
            </a>
          </li>
        ))}
      </ul>
      <ul className="faqs__information-list">
        {faqsData.map((item) => (
          <li className="faqs__information-list_item">
            <div className="faqs__information-list_item_lowercase">
              <span className="faqs__information-list_item_vector"></span>
              <div>
                <h3 className="faqs__information-list_item_subtitle">
                  {item.subtitle}
                </h3>
                <p className="faqs__information-list_item_paragraph body">
                  {item.paragraph}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Faqs;
