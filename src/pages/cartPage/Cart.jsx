import { CartProduct, OrderSum } from "../../widgets";

export const Cart = () => {
    return (
        <div>
            <div className="container">
                <h2>Your cart</h2>
                <CartProduct />
                <OrderSum />
            </div>
        </div>
    );
}