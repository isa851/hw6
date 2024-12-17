import './card.css';
import prod from '../../imgs/homepage/Frame32.jpg'
import ReactStars from 'react-stars';

export const Card = () => {
    return (
        <div className='cardCont'>
            <div className='imgCont'>
                <img src={prod} alt="" />
            </div>
            <h3>T-SHIRT WITH TAPE DETAILS</h3>
            <ReactStars
                count={5}
                value={4.5}  
                isHalf={true}          
                size={18}       
                edit={false}    
                activeColor="#ffd700" 
                inactiveColor="#ffffff"
            />
            <h3>$120</h3>
        </div>
    );
}

