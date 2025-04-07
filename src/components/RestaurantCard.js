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

  export default RestaurantCard;