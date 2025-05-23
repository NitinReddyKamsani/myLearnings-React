import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    function handleAddItem(item){
        dispatch(addItem(item));
    }

    return (
    
        <div>
            {
                items.map((item)=>(
                    <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <div className="py-2 ">
                            <span>{item.card.info.name}</span>
                            <span>-₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 relative">
                            <img className="rounded-md" src={CDN_URL + item.card.info.imageId} />
                            <button className="bg-black text-white absolute mx-[40px] rounded-lg p-1 bottom-3" onClick={()=>handleAddItem(item)}>Add +</button>
                             
                        </div>
                    </div>
                ))
            }
        </div>


    )
}

export default ItemList