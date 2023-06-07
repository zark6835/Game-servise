import { teamCardData } from "../../data/teamCardData";

import "./team-card.scss";

const TeamCard = () => {
  return (
    <section className="teamCard">
      <h2 className="header2">core team</h2>
      <ul className="teamCard__list">
        {teamCardData.map((item) => (
          <li className="teamCard__list-item">
            <img className="teamCard__list-item_img" src={item.img} alt="" />
            <div className="teamCard__list-item_content">
              <h3 className="header3">{item.name}</h3>
              <p className="body">{item.information}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TeamCard;
