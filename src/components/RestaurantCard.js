const RestaurantCard = ({resData}) =>{
    const {name,cuisines,avgRating,costForTwo} = resData.info;
      return(
          <div className="m-4 p-4 w-[300px] bg-gray-50 h-[500px] shadow-md transition-transform duration-300 hover:scale-105 rounded-md">
              <img className="rounded-md" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}>
              </img>
              <h3 className="font-bold py-2">{name}</h3>
              <h4 className="break-words">{cuisines.join(",")}</h4>
              <h4>{avgRating + " " + "stars"}</h4>
              <h4>{costForTwo}</h4>
          </div>
          
      )
  }

  export default RestaurantCard;