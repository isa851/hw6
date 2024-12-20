import axios from 'axios';
import { useEffect, useState } from 'react';
import { Casual, Filter } from '../../widgets/categoryPage';
import '../../app.css';

export const Category = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(({data}) => {
            setProduct(data);
        })
        .catch((error) => {console.log(error);})
    }, []);
    
    return (
        <div className='container flexCont'>
            <Filter />
            <Casual product={product} />
        </div>
    );
}
