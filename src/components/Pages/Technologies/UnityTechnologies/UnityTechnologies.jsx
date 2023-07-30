import img1 from '../../../../assets/img/content/technologles-pages/technologles-unity.png'

import '../../pages-style.scss'

const UnityTechnologies = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Technologies<span></span>Unity</p>
                <h2 className='header1 color'>ar app development</h2>
            </div>
            <img className='pages__img' src={img1} alt="" />
        </section>
     );
}
 
export default UnityTechnologies;