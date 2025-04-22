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
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
//import Grocery from "./components/Grocery";
import { useSelector } from "react-redux";
import Cart from "./components/Cart";



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

    <Provider store={appStore}> {/** redux store */}
    <UserContext.Provider value={{loggedInUser : userName}}> {/** context api */}
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
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
  },
  {
    path : "/cart",
    element : <Cart />
  }
  
   
    ],
    errorElement : <Error/>
}
]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
