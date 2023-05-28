import tel from '../../assets/img/content/services-pages/cards/card-img-tel.png'
import controller from '../../assets/img/content/services-pages/cards/card-img-controller.png'
import vr from '../../assets/img/content/services-pages/cards/card-img-vr.png'
import development from '../../assets/img/content/services-pages/cards/card-img-development.png'
import tools from '../../assets/img/content/services-pages/cards/card-img-tools.png'
import img from '../../assets/img/content/services-pages/cards/card-img-3d.png'
import app from '../../assets/img/content/services-pages/cards/card-img-app.png'

import './services-pages.scss'

const ServicesPages = () => {
    return ( 
        <section className='services'>
            <h2 className='header2'>Services</h2>
            <ul className='services__card'>
                <li className='services__card-item'>
                    <img className='services__card-img' src={tel} alt="" />
                    <p className='services__card-paragraph'>Mobile Application Development</p>
                </li>
                <li className='services__card-item'>
                    <img className='services__card-img' src={controller} alt="" />
                    <p className='services__card-paragraph'>Game development outsourcing</p>
                </li>
                <li className='services__card-item'>
                    <img className='services__card-img' src={vr} alt="" />
                    <p className='services__card-paragraph'>vr app development</p>
                </li>
                <li className='services__card-item'>
                    <img className='services__card-img' src={development} alt="" />
                    <p className='services__card-paragraph'>Dedicated Developers</p>
                </li>
                <li className='services__card-item'>
                    <img className='services__card-img' src={tools} alt="" />
                    <p className='services__card-paragraph'>sdk development</p>
                </li>
                <li className='services__card-item'>
                    <img className='services__card-img' src={img} alt="" />
                    <p className='services__card-paragraph'>sdk 3d modeling </p>
                </li>
                <li className='services__card-item'>
                    <img className='services__card-img' src={app} alt="" />
                    <p className='services__card-paragraph'>ar app development</p>
                </li>
            </ul>
        </section>
     );
}
 
export default ServicesPages;