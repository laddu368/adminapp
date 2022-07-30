import "./navbar.scss"
import {useContext} from "react";
import SearchOffIcon from '@mui/icons-material/SearchOff';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListAltIcon from '@mui/icons-material/ListAlt';
import { DarkModeContext } from "../../context/darkModecontext";
const Navbar = ()=>{
    const {dispatch} =useContext(DarkModeContext)
 return (
    <div className="navbar">
   <div className="wrapper">
    <div className="search">
        <input type="text" placeholder="Search..." />
        <SearchOffIcon className="icon"/>
        </div>
        <div className="items">
            <div className="item">
             < LanguageIcon  className="icon"/>
             English
            </div>
            <div className="item">
               <DarkModeIcon  className="icon"  onClick={()=>dispatch({type:"DARK"})} />
          
            </div>
            <div className="item">
             <FullscreenExitIcon  className="icon"/>
            
            </div>
            <div className="item">
             <CircleNotificationsIcon  className="icon"/>
             <div className="counter">1</div>
              
            </div>
            <div className="item">
             <  ChatBubbleIcon  className="icon"/>
             <div className="counter">1</div>
            </div>
            <div className="item">
             <   ListAltIcon  className="icon"/>
               </div>
               <div className="item">
             <img src="https://images.pexels.com/photos/12836129/pexels-photo-12836129.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" className="avatar" />
               </div>
        </div>
        </div>
        </div>
 )

}
export default Navbar