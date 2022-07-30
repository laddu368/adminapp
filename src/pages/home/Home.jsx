import "./home.scss"
import Sidebar from "../../Components/sidebar/Sidebar"
import Navbar from "../../Components/navbar/Navbar"
import Widgets from "../../Components/widgets/Widgets" 
import Featured from "../../Components/featured/Featured"
import Chart from "../../Components/chart/Chart"
import Table from "../../Components/table/Table"
const Home = () =>{
    return(
        <div className="home">
            <Sidebar/>
           <div className="homecontainer"> 
               <Navbar/>
             <div className="widgets">
                <Widgets type="user"/> 
                <Widgets type="order"/> 
                <Widgets type="earning"/> 
                <Widgets type="balnace"/> 
                 </div> 
                 <div className="charts">
<Featured/>
<Chart/>
                 </div>
                 <div className="listContainer">
                    <div className="listTitle">LAtest Transactions</div>
                <Table/>
                 </div>
                </div>
            </div>
    )

}
export default Home