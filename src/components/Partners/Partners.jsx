import partnersData from '../../data/partnersData';
import "./partners.scss";

const Partners = () => {
    console.log(partnersData);
  return (
    <section className="partners">
      <h2 className="header2">Partners</h2>
      <ul className="partners__card">
        {partnersData.map((item) => (
          <li className="partners__card-item" key={item.id}>
            <img className="partners__card-img" src={item.img} alt="" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Partners;
