import React from "react";
import ReactDOM from "react-dom/client"

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://play-lh.googleusercontent.com/FkTWfs8onbVt580dyUIbiA5tOlW4cfgnNqG1yeASZ82Ciw1kl96zNyp21M4n6qmgk4o"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const RestaurantList = 
  [
    {
        info: {
            id: "418341",
            name: "Pizza Hut",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/48cd92b2-38f4-41a2-b0b9-6e68af0d9d4d_418341.jpg",
            locality: "Malkajgiri",
            areaName: "Malkajgiri",
            costForTwo: "₹350 for two",
            cuisines: ["Pizzas"],
            avgRating: 4.2,
            totalRatingsString: "4.8K+",
            sla: {
                deliveryTime: 22,
                lastMileTravel: 0.7,
                slaString: "20-25 mins",
                lastMileTravelString: "0.7 km",
            }
        }
    },
    {
        info: {
            id: "567784",
            name: "Chinese Wok",
            cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
            locality: "Arul Colony",
            areaName: "Yapral Kowkoor",
            costForTwo: "₹250 for two",
            cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
            avgRating: 4.2,
            totalRatingsString: "2.2K+",
            sla: {
                deliveryTime: 30,
                lastMileTravel: 4.3,
                slaString: "30-35 mins",
                lastMileTravelString: "4.3 km",
            }
        }
    },
    {
        info: {
            id: "8787",
            name: "Subway",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/21/76157e4e-0aa4-4ab0-9132-722de18f09b3_8787.JPG",
            locality: "Sainikpuri Rd",
            areaName: "Sainikpuri",
            costForTwo: "₹350 for two",
            cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
            avgRating: 4.2,
            totalRatingsString: "28K+",
            sla: {
                deliveryTime: 28,
                lastMileTravel: 5,
                slaString: "25-30 mins",
                lastMileTravelString: "5.0 km",
            }
        }
    }
]

  

const RestaurantCard = ({resData}) =>{
  const {name,cuisines,avgRating,costForTwo} = resData.info;
    return(
        <div className="card">
            <img className="reslogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating + " " + "stars"}</h4>
            <h4>{costForTwo}</h4>
        </div>
        
    )
}

const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    RestaurantList.map((restaurant) => 
                      <RestaurantCard key = {restaurant.info.id} resData={restaurant} />
                    )
                }

            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);