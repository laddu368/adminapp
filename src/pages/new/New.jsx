import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./new.scss"
const New = () =>{
    return(
        <div className="new" > 
        <Sidebar/>
         <div className="newContainer">
            <Navbar/>
            <div className="top">
                <h1 className="">Add new user</h1>
            </div>
            <div className="bottom">
                <div className="left">
                    <img src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="" />
                </div>
                <div className="right">
                    <form>
               <div className="formInput">
                 <label>Name</label>
                <input type="text" placeholder="jhon_doe" />
               </div>
               <div className="formInput">
                 <label>Name and Surname</label>
                <input type="text" placeholder="jhon_doe" />
               </div>
               <div className="formInput">
                 <label>email</label>
                <input type="text" placeholder="jhon_doe@gmail.com" />
               </div>
               <div className="formInput">
                 <label>phone</label>
                <input type="text" placeholder="123 586 566" />
               </div>
               <div className="formInput">
                 <label>password</label>
                <input type="text"  />
               </div>
               <div className="formInput">
                 <label>Address</label>
                <input type="text" placeholder=" vygvyucutctry gyuydhbhj" />
               </div>
               <div className="formInput">
                 <label>Country</label>
                <input type="text" placeholder="Australia" />
               </div>
        <button>send</button>
                    </form>
                </div>

            </div>

         </div>
         </div>
    )

}
export default  New