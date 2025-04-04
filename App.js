import React from "react";
import ReactDOM from "react-dom/client"

const Title = ()=>{
    return (
            <h1>Title goes Here</h1>
    )
}

const Heading = () =>{
    return(
        <div id="container">
            <Title />
            <h1>heading tag</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);