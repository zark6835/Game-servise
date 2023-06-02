import img1 from '../../../assets/img/content/products/products-img1.png'
import '../pages-style.scss'

const Products = () => {
    return ( 
        <section className='pages container'>
            <div className='pages__wrapper'>
                <p className='body color'>Home<span></span>Products</p>
                <h2 className='header1 color'>Stan assets products</h2>
            </div>
            <img className='pages__img' src={img1} alt="" />
        </section>
     );
}
 
export default Products;