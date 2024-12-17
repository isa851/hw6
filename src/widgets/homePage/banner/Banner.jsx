import './banner.css';
import banner from '../../../imgs/homepage/Rectangle2.jpg';

export const Banner = () => {
    return (
        <div className='bannerCont'>
            <img className='bannerImg' src={banner} alt="banner" />
            <div className='container'>
                <div className='textCont'>
                    <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <button className='shopBtn'>Shop Now</button>

                    <div className='flexItem'>
                        <div className='firstItem'>
                            <h3>200+</h3>
                            <p>International Brands</p>
                        </div>
                        <div className='secondItem'>
                            <h3>2,000+</h3>
                            <p>High-Quality Products</p>
                        </div>
                        <div className='thirdItem'>
                            <h3>30,000+</h3>
                            <p>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
