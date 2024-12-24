import ReactStars from 'react-stars';
import './infoProduct.css'

export const InfoProduct = () => {
    return (
        <div>
            <div className="productInfo">
                <h2>T-SHIRT WITH TAPE DETAILS</h2>
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
                <h3>$500</h3>
            </div>
        </div>
    );
}

