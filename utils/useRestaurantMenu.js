import React, { useEffect,useState } from "react";
import {MENU_API_URL} from "./constants"

const useRestaurantMenu = (resId) =>{ 

    const [resInfo,setresInfo] = useState(null);


    useEffect(()=>{
        fetchData();
    },[])

    async function fetchData(){
        const data = await fetch(MENU_API_URL + resId);
        const json = await data.json();
        setresInfo(json)

    }

    return resInfo;
}

export default useRestaurantMenu;