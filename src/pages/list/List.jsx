import DataTable from "../../Components/datatable/Datatable"
import Navbar from "../../Components/navbar/Navbar"
import Sidebar from "../../Components/sidebar/Sidebar"
import "./list.scss"
const List = () =>{
    return(
        <div className="list">
            <Sidebar />
            <div className="listContainer">
           <Navbar/>
 <DataTable />
            </div>
        </div>
    )

}
export default  List