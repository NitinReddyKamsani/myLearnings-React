import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            count : 3000000,
        };
    }

    render(){

        const {count} = this.state;

        return(
            <div className="user-card">

               <p>
               Welcome to Food Villa – your one-stop destination for delicious meals delivered straight to your doorstep. At Food Villa, we believe in bringing people closer to their favorite cuisines with just a few clicks. Our platform offers a seamless and user-friendly experience for browsing a wide range of restaurants, exploring menus, and placing online food orders in minutes.

               Whether you’re craving spicy street food, a wholesome home-style meal, or gourmet cuisine, Food Villa has something for every taste. We are committed to quality, convenience, and customer satisfaction, ensuring every meal you order is prepared fresh and delivered fast.

               Food Villa is more than just a food delivery service – it's a celebration of flavor, simplicity, and smart technology. Join us on our mission to make great food easily accessible to everyone, everywhere.


               </p>
               <h3 className="font-bold">Serving for almost {count} happy Customers😄</h3>

               <h4 className="font-bold">Get in touch at : {this.props.email}</h4>


            </div>
        )
    }
}

export default UserClass;