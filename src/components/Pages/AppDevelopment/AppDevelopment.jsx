import img1 from '../../../assets/img/content/services-pages/app-development-img.png'
import '../pages-style.scss'

const AppDevelopment = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>AR App Development</p>
                <h2 className='header1 color'>ar app development</h2>
            </div>
            <img className='pages__img' src={img1} alt="" />
        </section>
     );
}
 
export default AppDevelopment;