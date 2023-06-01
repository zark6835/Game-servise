import img1 from '../../../../assets/img/content/services-pages/vr-development-img.png'

import '../../pages-style.scss'

const VrDevrlopment = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>VR App Development</p>
                <h2 className='header1 color'>VR APP Development</h2>
            </div>
            <img src={img1} alt="" />
        </section>
     );
}
 
export default VrDevrlopment;