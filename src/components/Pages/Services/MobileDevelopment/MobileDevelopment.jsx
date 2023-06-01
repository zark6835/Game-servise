import img1 from '../../../../assets/img/content/services-pages/mobile-development-img.png'

import '../../pages-style.scss'

const MobileDevelopment = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>Mobile Application Development</p>
                <h2 className='header1 color'>Mobile Application Development</h2>
            </div>
            <img src={img1} alt="" />
        </section>
     );
}
 
export default MobileDevelopment;