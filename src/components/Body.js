import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{

    const [restaurants,setRestaurant] = useState([]);
    const [filteredRestaurants,setfilteredRestaurants] = useState([]);
    const [input,setInput] = useState("");

    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.456947981068577&lng=78.55041615664959&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const rest = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        setRestaurant(rest);
        setfilteredRestaurants(rest);
    }

   const handleClick = () => {
        const filtered = restaurants.filter((res)=>  res.info.avgRating > 4.3 )
        setRestaurant(filtered);
   }

    return restaurants.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input className="search-box"  value = {input} onChange={(e)=>{
                        setInput(e.target.value);
                    }} />
                    <button onClick={()=>{
                       const search =  restaurants.filter((res)=> 
                            res.info.name.toLowerCase().includes(input.toLowerCase()))
                            setfilteredRestaurants(search);
                    }}>Search</button>
                </div>
                <button onClick={handleClick}>Filter Top Restaurants</button>
            </div>
        
            <div className="res-container">
                {
                    filteredRestaurants.map((restaurant) => 
                      <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
                    )
                }
            </div>
        </div>
    )
    

}

export default Body;