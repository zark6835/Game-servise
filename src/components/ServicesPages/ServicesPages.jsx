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
        <section className='servicesPages'>
            <h2 className='header2'>Services</h2>
            <ul className='servicesPages__card'>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={tel} alt="" />
                    <p className='servicesPages__card-paragraph'>Mobile Application Development</p>
                </li>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={controller} alt="" />
                    <p className='servicesPages__card-paragraph'>Game development outsourcing</p>
                </li>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={vr} alt="" />
                    <p className='servicesPages__card-paragraph'>vr app development</p>
                </li>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={development} alt="" />
                    <p className='servicesPages__card-paragraph'>Dedicated Developers</p>
                </li>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={tools} alt="" />
                    <p className='servicesPages__card-paragraph'>sdk development</p>
                </li>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={img} alt="" />
                    <p className='servicesPages__card-paragraph'>sdk 3d modeling </p>
                </li>
                <li className='servicesPages__card-item'>
                    <img className='servicesPages__card-img' src={app} alt="" />
                    <p className='servicesPages__card-paragraph'>ar app development</p>
                </li>
            </ul>
        </section>
     );
}
 
export default ServicesPages;