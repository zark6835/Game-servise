import "./text-information.scss";

const TextInformation = () => {
  return (
    <section className="information container">
      <div className="information__wrapper">
        <h2 className="header2">Header 1</h2>
        <p className="body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          sodales eleifend dolor vel cursus. Fusce in ligula ut leo eleifend
          lobortis fringilla non elit. Vivamus mollis, odio ac finibus rutrum,
          libero augue venenatis leo, in maximus ipsum dui et est. In in aliquet
          libero. In ac enim non lectus convallis feugiat. Ut in pharetra
          tortor. Quisque ligula magna, iaculis non porta ut, suscipit sit amet
          sapien. Sed ut pharetra mauris. Cras ac dapibus turpis. Etiam suscipit
          orci eu tristique gravida.
        </p>
      </div>
      <div className="information__wrapper">
        <h2 className="header2">Header 2</h2>
        <p className="body">
          Fusce consectetur vel urna ut venenatis. Etiam in mauris odio.
          Phasellus sed turpis vitae justo maximus suscipit in ut risus. Quisque
          viverra magna lorem, et placerat velit cursus quis. Maecenas venenatis
          molestie eros, in pulvinar urna elementum quis. Praesent a lorem quis
          sem cursus feugiat sed nec erat. Maecenas venenatis molestie eros, in
          pulvinar urna elementum quis. Praesent a lorem quis sem cursus feugiat
          sed nec erat.
        </p>
      </div>
    </section>
  );
};

export default TextInformation;
