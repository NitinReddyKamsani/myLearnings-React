import UserClass from "./UserClass";
const About = () =>{
    return(
        <div className="About border border-black m-4 p-4 ">
        <h1 className="font-bold text-xl">About US</h1>
        <UserClass email={"foodvilla@support.com"} />
        </div>
    )
}

export default About;