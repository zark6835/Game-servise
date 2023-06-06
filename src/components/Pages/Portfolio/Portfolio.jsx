import img1 from '../../../assets/img/content/portfolio/portfolio-img.png'
import '../pages-style.scss'

const Portfolio = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Portfolio</p>
                <h2 className='header1 color'>stan assets portfolio</h2>
            </div>
            <img className='pages__img' src={img1} alt="" />
        </section>
     );
}
 
export default Portfolio;