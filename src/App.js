import React,{lazy, Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"; // ✅ Import added
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "../utils/UserContext";
//import Grocery from "./components/Grocery";


const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {

const [userName,setUserName] = useState();

useEffect(()=>{
  const data={
    name : "Nitin Reddy Kamsani",
  }
  setUserName(data.name);
},[])

  return (
    <UserContext.Provider value={{loggedInUser : userName}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
  {
    path : "/",
    element : <Body />,
    errorElement : <Error />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path : "/contact",
    element : <Contact />
  },
  {
    path : "/grocery",
    element : <Suspense fallback={<Shimmer />}><Grocery /></Suspense>
  },
  {
    path : "/restaurants/:resId",
    element : <RestaurantMenu />
  }
   
    ],
    errorElement : <Error/>
}
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
