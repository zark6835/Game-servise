import img1 from '../../assets/img/content/services-home/services-img1.png'
import img2 from '../../assets/img/content/services-home/services-img2.png'
import img3 from '../../assets/img/content/services-home/services-img3.png'
import img4 from '../../assets/img/content/services-home/services-img4.png'

import "./services-home.scss";

const ServicesHome = () => {
  return (
    <section className='services'>
      <h2 className='header2'>Services</h2>
      <div className='services__card-wrapper'>
        <div className='services__card-content'>
          <div className='services__card-information'>
            <h3 className='header3'>GAME DEVELOPMENT</h3>
            <p className='body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              dapibus purus, viverra porta velit. Nam eleifend, dolor a
              condimentum ullamcorper, ligula nunc elementum mi, et mollis odio
              ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id
              elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum
              nunc eleifend quis. Fusce dignissim, lectus ut tristique
              convallis, leo justo tempus erat, at volutpat arcu tellus eget
              sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce
              lacus felis, efficitur ut euismod ac, gravida sed tortor.
              Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut
              libero ut arcu maximus faucibus ut ut sapien.
            </p>
          </div>
          <img src={img1} alt="" />
        </div>
        <div className='services__card-content'>
          <img src={img2} alt="" />
          <div className='services__card-information'>
            <h3 className='header3'>SDK Development</h3>
            <p className='body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              dapibus purus, viverra porta velit. Nam eleifend, dolor a
              condimentum ullamcorper, ligula nunc elementum mi, et mollis odio
              ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id
              elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum
              nunc eleifend quis. Fusce dignissim, lectus ut tristique
              convallis, leo justo tempus erat, at volutpat arcu tellus eget
              sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce
              lacus felis, efficitur ut euismod ac, gravida sed tortor.
              Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut
              libero ut arcu maximus faucibus ut ut sapien.
            </p>
          </div>
        </div>
        <div className='services__card-content'>
          <div className='services__card-information'>
            <h3 className='header3'>3D Modeling services</h3>
            <p className='body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              dapibus purus, viverra porta velit. Nam eleifend, dolor a
              condimentum ullamcorper, ligula nunc elementum mi, et mollis odio
              ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id
              elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum
              nunc eleifend quis. Fusce dignissim, lectus ut tristique
              convallis, leo justo tempus erat, at volutpat arcu tellus eget
              sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce
              lacus felis, efficitur ut euismod ac, gravida sed tortor.
              Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut
              libero ut arcu maximus faucibus ut ut sapien.
            </p>
          </div>
          <img src={img3} alt="" />
        </div>
        <div className='services__card-content'>
          <img src={img4} alt="" />
          <div className='services__card-information'>
            <h3 className='header3'>VR App Development</h3>
            <p className='body'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
              dapibus purus, viverra porta velit. Nam eleifend, dolor a
              condimentum ullamcorper, ligula nunc elementum mi, et mollis odio
              ligula eu felis. Vestibulum a libero lorem. Nulla vestibulum id
              elit in ullamcorper. Fusce pellentesque tortor velit, eu rutrum
              nunc eleifend quis. Fusce dignissim, lectus ut tristique
              convallis, leo justo tempus erat, at volutpat arcu tellus eget
              sapien. Aliquam non ligula in ligula malesuada venenatis. Fusce
              lacus felis, efficitur ut euismod ac, gravida sed tortor.
              Suspendisse vitae imperdiet elit, at viverra magna. Aenean ut
              libero ut arcu maximus faucibus ut ut sapien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
