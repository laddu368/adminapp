import { Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModecontext";
 

function App(){
  const {darkMode} =useContext(DarkModeContext)
return (
   <div className={ darkMode ?"app dark":"app"}>
  <BrowserRouter>
  <Routes>
<Route path="/">
    <Route index element={<Home  />} />
    <Route path="login" element={<Login />}   />
    <Route path="users">
      <Route index element={<List/>} />
      <Route path=":userId" elment={<Single/>} />
      <Route path="new" element={<New/>} />
    </Route>
    <Route path="products">
      <Route index element={<List/>} />
      <Route path=":productId" elment={<Single/>} />
      <Route path="new" element={<New/>} />
    </Route>
</Route>
  </Routes>
 
    
 
  </BrowserRouter>
   
   </div>
);
}
export default App;