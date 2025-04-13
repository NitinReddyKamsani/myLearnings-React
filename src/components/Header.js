import { useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = () =>{

    const [Btn,setBtn] = useState("Login");

    function handleBtn(){
        Btn === 'Login' ? setBtn("Logout") : setBtn("Login");
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                   <Link to="/" className="link"> <li>Home</li></Link>
                    <Link to="/about" className="link" > <li>About US</li> </Link>  
                    <Link to="/contact" className="link"> <li>Contact US</li> </Link>
                    <Link className="link"><li>Cart</li></Link>
                    <Link to = "/grocery" className="link"><li>Grocery</li></Link>
                    <button className="login" onClick={handleBtn}>{Btn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;