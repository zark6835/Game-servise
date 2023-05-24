import './achievements.scss'

const Achievements = () => {
    return ( 
        <section className='achievements'>
            <h2 className='header2'>achievements</h2>
            <ul className='achievements__card-wrapper'>
                <li className='achievements__card-item img1'>
                    <p className='body'>Collaboration with <span className='bold'>Moon Studios</span> on WotW AAA Unity game.</p>
                </li>
                <li className='achievements__card-item img2'>
                    <p className='body'><span>50+</span> successfully launched projects on the the market.</p>
                </li>
                <li className='achievements__card-item img2'>
                    <p className='body'>Asset store publisher since <span>2013</span></p>
                </li>
                <li className='achievements__card-item img1'>
                    <p className='body'>Our products (packages) used by <span>100k+</span> devs in <span>5k+</span> commercial projects worldwide</p>
                </li>
            </ul>
        </section>
     );
}
 
export default Achievements;