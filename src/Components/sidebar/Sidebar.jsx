import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import LogoutIcon from '@mui/icons-material/Logout';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModecontext";
const Sidebar = ()=>{
 const {dispatch} =useContext(DarkModeContext)
 return (
    <div className="sidebar"> 
      <div className="top">
        <Link to="/" style={{textDecoration:"none"}}>
            <span className="logo" >saiadmin</span></Link> 
      
       </div>
       <hr/>
        <div className="center"> 
         <ul>
            <p className="title">MAIN</p><li> <DashboardIcon className="icon" /> <span>Dashboard</span></li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration:"none"}}>
            <li><PersonIcon className="icon" /> <span>Users</span></li> </Link>
            <li>< ProductionQuantityLimitsIcon className="icon" /> <span>Product</span></li>

            <li> <ShoppingBasketIcon className="icon" /><span>Orders</span></li>
            <li><DeliveryDiningIcon className="icon" /> <span>Delivery</span></li>
            <p className="title">USEFUL</p>
            <Link to="/" style={{textDecoration:"none"}}> <li> <QueryStatsIcon className="icon" /><span>Stats</span></li> </Link> 
             <li> <NotificationsNoneIcon className="icon"  /> <span>Notifications</span></li>  
             <p className="title">SERVICE</p>
             <Link to="/" style={{textDecoration:"none"}}> <li> < MonitorHeartIcon className="icon" /><span>System health</span></li> </Link>
             <li> <BrandingWatermarkIcon className="icon" /><span>Logs </span></li>
             <li> < SettingsIcon className="icon" /> <span> Settings</span></li>
             <p className="title">USER</p><li>
                 < AccountCircleIcon className="icon" /> <span>Profile </span></li>
             <li> <LogoutIcon className="icon" /><span>Logout </span></li>
              
         </ul>
          </div>
            <div className="bottom"> 
            <div className="colorOption" onClick={()=>dispatch({type:"LIGHT"})} ></div>     
            <div className="colorOption" onClick={()=>dispatch({type:"DARK"})} ></div>   
               
            </div>
    </div>
 )

}
export default Sidebar