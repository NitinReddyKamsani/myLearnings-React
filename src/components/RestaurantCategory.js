import ItemList from "./ItemList";
import React,{useState} from "react";


const RestaurantCategory = ({data,showItems,setShowIndex}) => {

    function handleClick(){
        setShowIndex();
    }

    return(
        <div className="p-4 w-6/12 mx-auto my-4  bg-gray-100 shadow-lg cursor-pointer" onClick={handleClick}>
            <div className="flex justify-between">
            <span className="font-bold text-lg">{data.title + " "} ({data.itemCards.length}) </span>
            <span className="font-bold text-xl">v</span>
            
            </div>
           { showItems && <ItemList items = {data.itemCards} /> }
        </div>
    );
};

export default RestaurantCategory;