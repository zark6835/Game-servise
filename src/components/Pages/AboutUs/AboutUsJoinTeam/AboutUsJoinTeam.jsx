import generalImg from "../../../../assets/img/content/aboutUs-pages/AboutUsJoinTeam-general-img.png";

import "../../pages-style.scss";

const AboutUsJoinTeam = () => {
  return (
    <section className="container">
      <div className="pages">
        <div className="pages__wrapper">
          <p className="body color">
            Home<span></span>Portfolio
          </p>
          <h2 className="header1 color">stan assets portfolio</h2>
        </div>
        <img className="pages__img" src={generalImg} alt="" />
      </div>
      <div className="pages__content">
        <p className="body">
          The internal culture of Stan's Assets is focused on the comfort,
          professional and personal growth of each team member. We do our best
          to make each of our employees feel that they are making their dreams
          come true. Therefore, unlike product companies, we ourselves choose
          which projects to work with. And we do this solely according to our
          values and interests.
        </p>
        <p className="body">
          Our core team consists of experienced developers who have worked with
          companies such as One signal, Moon studios, Unity. 
          <span>
            This is your chance to learn from their experience and study new
            skills by working with the best pros.
          </span>
           Our Stan's Assets team who is ambitious and friendly is waiting for
          you!
        </p>
      </div>
    </section>
  );
};

export default AboutUsJoinTeam;
