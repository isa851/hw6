import { Card } from '../../../entities';
import './newArrivals.css'

export const NewArrivals = () => {
    return (
        <div className='arrivalsCont'>
            <div className='container'>
                <h2>NEW ARRIVALS</h2>
                <div className='flexItem'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}
