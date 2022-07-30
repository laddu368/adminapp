import Sidebar from "../../Components/sidebar/Sidebar"
import "./single.scss"
import Navbar from "../../Components/navbar/Navbar"
const  Single = () =>{
    return(
        <div className="single">  
         <Sidebar/>
         <div className="singleContainer">
            <Navbar/>
            <div className="top">
                <div className="left">
                   <h1 className="title">information</h1>
                   <div className="item"></div> 
                    <img src="https://images.pexels.com/photos/10668002/pexels-photo-10668002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="ItemImage" />
                </div>
                <div className="right"></div>
            </div>
            <div className="bottom"></div>
         </div>
        </div>
    )

}
export default Single
