import img1 from '../../../../assets/img/content/services-pages/sdk-modelings-img.png'

import '../../pages-style.scss'


const SdkModelings = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>Sdk 3d Modeling</p>
                <h2 className='header1 color'>sdk 3d modeling</h2>
            </div>
            <img src={img1} alt="" />
        </section>
     );
}
 
export default SdkModelings;