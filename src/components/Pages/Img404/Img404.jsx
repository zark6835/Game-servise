import './img404.scss'

import img from '../../../assets/img/404.png'

const Img404 = () => {
    return ( 
        <div className='wrapper-img'>
            <img src={img} alt="" />
            <div className="wrapper-content">
                <h1 className="header1 color">it looks like you are lost</h1>
            <a className="button-green btn-home" href='/'>Return to homepage</a>
            </div>
        </div>
     );
}
 
export default Img404;