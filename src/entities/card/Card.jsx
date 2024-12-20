import './card.css';
import prod from '../../imgs/homepage/Frame32.jpg'
import ReactStars from 'react-stars';

export const Card = () => {
    return (
        <div className="product">
            <div className="item">
                <img className="image" src={prod} alt="Product img" />
            </div>
            <div className="description">
                <h3>T-SHIRT WITH TAPE DETAILS</h3>
                <div className="rating">
                    <ReactStars
                        count={5}
                        value={4.5}  
                        isHalf={true}          
                        size={18}       
                        edit={false}    
                        activeColor="#ffd700" 
                        inactiveColor="#ffffff"
                    />
                    <p>{4.5}/5</p>
                </div>
                
                <h3>${500}</h3>
            </div>
        </div>
    );
}

