import './casual.css';
import {Card} from '../../../entities'

export const Casual = ({product}) => {
    console.log(product);
    return (
        <div className='casualCont'>
            {
                product && (
                    product.map((item) => (
                        <div key={item.id}>
                            <Card img={item.image} title={item.title} rate={item?.rating?.rate} price={item.price} />
                        </div>
                    ))
                )
            }
        </div>
    );
}

