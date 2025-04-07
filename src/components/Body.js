import RestaurantCard from "./RestaurantCard";
import { RestaurantList } from "../../utils/MockData";
import { useState } from "react";

const Body = () =>{

    const [restaurant,setRestaurant] = useState(RestaurantList);

   const handleClick = () => {

        const filtered = RestaurantList.filter((res)=>  res.info.avgRating > 4.3 )
        setRestaurant(filtered);
   }
  
    return(
        <div className="body">
            <div className="search">
                <button onClick={handleClick}>Filter Top Restaurants</button>
            </div>
            <div className="res-container">
                {
                    restaurant.map((restaurant) => 
                      <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
                    )
                }

            </div>
        </div>
    )

}

export default Body;