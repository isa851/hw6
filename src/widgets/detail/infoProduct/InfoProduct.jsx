import ReactStars from 'react-stars';
import './infoProduct.css'

export const InfoProduct = ({product,addCart}) => {
    return (
        <div>
            <div className="productInfo">
                <h2>{product?.title}</h2>
                <div className="rating">
                    <ReactStars
                        count={5}
                        value={4.5}  
                        isHalf={true}          
                        size={30}       
                        edit={false}    
                        activeColor="#ffd700" 
                        inactiveColor="#ffffff"
                    />
                    <p>4.5/5</p>
                </div>
                <h3>${product?.price}</h3>
                <p>{product?.description}</p>
                <button onClick={()=>addCart(product)} className='Button'>BUY</button>
            </div>
        </div>
    );
}

