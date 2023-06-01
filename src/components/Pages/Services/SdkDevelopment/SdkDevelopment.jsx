import img1 from '../../../../assets/img/content/services-pages/sdk-development-img.png'
import '../../pages-style.scss'

const SdkDevelopment = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>Sdk Development</p>
                <h2 className='header1 color'>sdk development</h2>
            </div>
            <img src={img1} alt="" />
        </section>
     );
}
 
export default SdkDevelopment;