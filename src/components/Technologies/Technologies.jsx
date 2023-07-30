import android from "../../assets/img/content/technologies/technologies-android.png";
import apple from "../../assets/img/content/technologies/technologies-apple.png";
import unity from "../../assets/img/content/technologies/technologies-unity.png";

import "./technologies.scss";

const Technologies = () => {
  return (
    <section className="technologies">
      <h2 className="header2">Technologies</h2>
      <div className="technologies__wrapper">
        <p className="technologies__paragraph">
        <span className="technologies__paragraph-lightBlue">Stan’s </span>
        <span className="technologies__paragraph-blue">Assets </span>
          is a team of developers that are committed to developing high quality
          and engaging entertainment software
        </p>
        <div className="technologies__img-wrapper">
          <a href="/android-technologies"><img className="technologies__img-android" src={android} alt="" /></a>
          <a href="/ios-technologies"><img className="technologies__img-apple" src={apple} alt="" /></a>
          <a href="/unity-technologies"><img className="technologies__img-unity" src={unity} alt="" /></a>
        </div>
        <p className="technologies__paragraph">
          Our engineers develop applications for the most popular platforms.
        </p>
      </div>
    </section>
  );
};

export default Technologies;
