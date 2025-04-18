import { useState,useContext } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{

    const [Btn,setBtn] = useState("Login");

    const {loggedInUser} = useContext(UserContext);


    const cartItems = useSelector((store)=>store.cart.Items)
    

    function handleBtn(){
        Btn === 'Login' ? setBtn("Logout") : setBtn("Login");
    }
    return (
        <div className="flex justify-between bg-stone-100">
            <div className="logo-container">
                <img className="h-30 w-28 m-2 p-2" src={LOGO_URL}></img>
            </div>
            <div className="flex">
                <ul className="flex gap-3 p-6 m-7">
                    <Link to="/" className="link"> <li>Home</li></Link>
                    <Link to="/about" className="link" > <li>About US</li> </Link>  
                    <Link to="/contact" className="link"> <li>Contact US</li> </Link>
                    <Link to="/cart" className="link"><li>Cart-({cartItems.length})</li></Link>
                    <Link to = "/grocery" className="link"><li>Grocery</li></Link>
                    <Link className="link"><li>{loggedInUser}</li></Link>
                    <button className="border-black bg-black text-white p-1 bottom-2 rounded-sm" onClick={handleBtn}>{Btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;