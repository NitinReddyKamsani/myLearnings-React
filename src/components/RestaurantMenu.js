import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const [showIndex,setShowIndex] = useState(0);

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) {
        return <Shimmer />
    }

    const info = resInfo?.data?.cards?.[2]?.card?.card?.info;
     const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
     //console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)

     const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     )
   
    const { name, locality, cuisines, costForTwoMessage } = info;
    return resInfo === null ? <Shimmer /> : (
        <div className="m-2 p-2 text-center">
            <h1 className="font-bold text-2xl">Name :{name} </h1>
            <h2 className="font-bold text-xl">Address : {locality}</h2>
            <h4 className="font-bold text-lg">Cuisines : {cuisines.join(",")} - {costForTwoMessage}</h4>
            {
                categories.map((category,Index)=>
                     { 
                    
                    return(
                    <RestaurantCategory data={category?.card?.card} 
                    key={category?.card?.card?.categoryId} 
                    showItems = {Index===showIndex ? true : false}
                    setShowIndex={()=>setShowIndex(Index)} 
                    
                    />
                   
                )
            }
                
            )
                
            }
        </div>
    )
}

export default RestaurantMenu;