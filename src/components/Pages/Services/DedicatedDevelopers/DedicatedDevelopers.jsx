import img1 from '../../../../assets/img/content/services-pages/dedicated-development-img.png'
import '../../pages-style.scss'

const DedicatedDevelopers = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>Dedicated Developers</p>
                <h2 className='header1 color'>Dedicated Developers</h2>
            </div>
            <img src={img1} alt="" />
        </section>
     );
}
 
export default DedicatedDevelopers;