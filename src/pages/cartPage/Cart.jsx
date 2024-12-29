import { CartProduct, OrderSum } from "../../widgets";
import { Filter } from "../../widgets/categoryPage";
export const Cart = ({cartData, setCartData}) => {

    const addCount = (obj) => {
        const idx = cartData.findIndex((item) => {
            return item.id === obj.id;
        })

        cartData[idx].count += 1;
        setCartData([...cartData])
    }

    const minCount = (obj) => {
        const idx = cartData.findIndex((item) => {
            return item.id === obj.id;
        })

        if(cartData[idx].count === 1){
            setCartData(
                cartData.filter((item) => {return item.id !== obj.id})
            )
        }else{
            cartData[idx].count -= 1;
            setCartData([...cartData])
        }
    }

    const deleteCart = (obj) => {
        setCartData(
            cartData.filter((item) => {return item.id !== obj.id})
        )
    }

    return (
        <div>
            <div className="container">
                <h2>Your cart</h2>
                <CartProduct 
                cartData={cartData}
                addCoount={addCoount}
                minCount={minCount}
                deleteCart={deleteCart} />
                <OrderSum />
            </div>
        </div>
    );
}