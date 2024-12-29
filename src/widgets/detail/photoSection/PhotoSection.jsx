import './photoSection.css';

export const PhotoSection = ({ product }) => {

    
    return (
        <div className='photoCont'>
            {
                product && 
                (
                    <div className='photoFlex'>
                        <div className='images'>
                            <div>
                                <img src={product?.category.image} alt="" />     
                            </div>
                            <div>
                                <img src={product?.category.image} alt="" />     
                            </div>
                            <div>
                                <img src={product?.category.image} alt="" />     
                            </div>   
                        </div>
                        <div className='mainImg'>
                            <img src={product?.category.image} alt="" />     
                        </div>
                    </div>
                )
            }
        </div>
    );
}

