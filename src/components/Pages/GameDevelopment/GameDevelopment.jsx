import img1 from '../../../assets/img/content/services-pages/game-development-img.png'

import '../pages-style.scss'

const GameDevelopment = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Services<span></span>Game Development Outsourcing</p>
                <h2 className='header1 color'>Game development outsourcing</h2>
            </div>
            <img src={img1} alt="" />
        </section>
     );
}
 
export default GameDevelopment;