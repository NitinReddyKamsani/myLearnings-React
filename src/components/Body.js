import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
        setfilteredRestaurants(filtered);
   }

   const isOnline = useOnlineStatus();

    if(isOnline === false) return <h1>It seems your are offline !! please check your intenet coonection</h1>

    return restaurants.length===0 ? <Shimmer /> : (
        <div className="">
            <div className="flex justify-between">
                <div className="m-4 p-4">
                    <input className="border border-solid border-black"  value = {input} onChange={(e)=>{
                        setInput(e.target.value);
                    }} />
                    <button className="bg-green-100 m-2 px-4 py-1" onClick={()=>{
                       const search =  restaurants.filter((res)=> 
                            res.info.name.toLowerCase().includes(input.toLowerCase()))
                            setfilteredRestaurants(search);
                    }}>Search</button>
                </div>

                <div className="bg-gray-100 m-6 p-2 h-10">
                <button className=""onClick={handleClick}>Filter Top Restaurants</button>
                </div>
                
            </div>
        
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map((restaurant) => 
                     <Link key = {restaurant.info.id} to={"/restaurants/" + restaurant.info.id} className="link-item"> <RestaurantCard  resData={restaurant} /> </Link>
                    )
                }
            </div>
        </div>
    )
    

}

export default Body;