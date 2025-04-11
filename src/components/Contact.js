import React from "react";

class Contact extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            userInfo : {
                name : "dummmy",

            }
        };
    };

    async componentDidMount(){
        
        const data = await fetch("https://api.github.com/users/NitinReddyKamsani")
        const json = await data.json();
        this.setState({
            userInfo : json,
        })
        console.log(json);
    };

   

    render(){

        const {name} = this.state.userInfo

        return(
        <div>
            <h2>Name : {name}</h2>
            <h2>Email : supportfoodvilla@icloud.com</h2>
        </div>
        )
    }
}

export default Contact;