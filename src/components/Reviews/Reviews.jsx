import clutch from '../../assets/img/content/reviews/reviews-clutch.png'
import star from '../../assets/img/content/reviews/reviews-star.png'
import halfStar from '../../assets/img/content/reviews/reviews-halfStar.png'

import './reviews.scss'

const Reviews = () => {
    return ( 
        <section className='reviews'>
            <img src={clutch} alt="" />
            <div className='reviews__content'>
                <p className='body2'>4.5</p>
                <div className='reviews__star'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={halfStar} alt="" />
                </div>
                <p className='body'>2 reviews </p>
            </div>
            <a className='button-green' href="#">Check out reviews</a>
        </section>
     );
}
 
export default Reviews;