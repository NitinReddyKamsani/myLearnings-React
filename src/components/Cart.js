import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { clearCart, removeItem } from "../../utils/cartSlice";

const Cart = () =>{

    const dispatch  = useDispatch()

    function handleClearCart(){
        dispatch(clearCart())
    }

    const handleRemove = () => {
        dispatch(removeItem())
    }
    
    
    const cartItems = useSelector((store)=>store.cart.Items);

    return (

        

        cartItems.length === 0 ? <h1 className="font-bold text-2xl m-48 text-center">Cart is Empty Add Items !!! </h1> : 

        <>
        <h1 className="font-bold  text-center text-2xl m-4 p-4">Cart</h1>
        <div className="flex justify-end w-9/12">
        <button className="p-2 bg-gray-200 rounded-lg" onClick={handleClearCart}>Clear Cart</button>
        </div>
        <div className="p-4 w-6/12 bg-gray-200 mx-auto my-4 rounded-md bottom-4 shadow-xl">  
           {   
            cartItems.map((item,index)=>(
                <div key={index} >
                    <div className="flex justify-between items-start border-b border-gray-300 py-4"> 
    
                        <div className="w-9/12 text-left">
                            <div className="py-1">
                                <span>{item?.card?.info?.name}</span>
                                <span>{ <span>-₹{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>}</span>
                            </div>

                        <p className="text-xs w-9/12 py-2">{item?.card?.info?.description}</p>
                        </div>
                    <div className="3/12 relative flex flex-col">
                        <img className="rounded-md h-28 w-24" src={CDN_URL + item.card.info.imageId} />
                        <button className="py-2 rounded-lg bg-slate-200" onClick={handleRemove}>Remove</button>
                    </div>
                    </div>
                  
                </div>
                
            ))
            
           }
        </div>
        
        </>
        
    )
}

export default Cart;
