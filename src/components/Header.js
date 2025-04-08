import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";

const Header = () =>{

    const [Btn,setBtn] = useState("Login");

    function handleBtn(){
        if(Btn=="Login"){
            setBtn("Logout");
        }
        else{
            setBtn("Login");
        }
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Cart</li>
                    <button className="login" onClick={handleBtn}>{Btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;