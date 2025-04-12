import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () =>{

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) {
        return <Shimmer />
    }

    const info = resInfo?.data?.cards?.[2]?.card?.card?.info;
     const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
     console.log(itemCards)
   
    const { name, locality, cuisines, costForTwoMessage } = info;
    return resInfo === null ? <Shimmer /> : (
        <div className="res-menu">
            <h1>Name :{name} </h1>
            <h2>Address : {locality}</h2>
            <h4>Cuisines : {cuisines.join(",")} - {costForTwoMessage}</h4>
            <h3>Menu</h3>
            <ul>
                { 
                    itemCards.map((item)=>(
                        <li key={item.card.info.id}> {item.card.info.name}---Rs.{item.card.info.defaultPrice/100 || item.card.info.price/100}</li> 
                    ))

                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;