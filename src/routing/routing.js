import { createBrowserRouter } from "react-router-dom";
import MysliderComp from  "../components/MysliderComp";
import MyImageComp from "../components/MyImageComp";
import ParentComp from "../components/ParentComp";
import PageNotFound from "../components/PageNotFound";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHookComp from "../Hooks/UseEffectHookComp";
import UseStateHookComp from "../Hooks/UseStateHookComp";
import MainDashboardComp from "../Layout/MainDashboardComp";
import VirtualDomComp from "../components/VirtualDomComp";
import FormValComp from "../components/FormValComp";
import ProductDashboardComp from "../CRUD/ProductDashboardComp";
import LoginComp from "../Layout/LoginComp";
import ProtedRouting from "./ProtedRouting";

const router=createBrowserRouter([
    {path:"login",element:<LoginComp/>},
    {path:"",element:<LoginComp/>},
    // {path:"login",element:<LoginComp/>},
    
   
        {path:"maindashboard",
       element:<ProtedRouting Component={MainDashboardComp}/>
       //MainDashboardComp
       ,children:[  
        {path:"UseState",element:<UseStateHookComp/>},
       
        {path:"UseEffect",element:<UseEffectHookComp/>},
        {path:"myslider",element:<MysliderComp />},
        {path:"myimages",element:<MyImageComp />},
        {path:"productdash",element:<ProductDashboardComp/>},
        {path:"parent/:id",element:<ParentComp/> },
        {path:"parent",element:<ParentComp/>},
        {path:"virtualdom",element:<VirtualDomComp/>},
        {path:"formval",element:<FormValComp/>},
        {path:"Hooks",element:<ReactHooksComp/>,
            children:[
        {path:"UseState",element:<UseStateHookComp/>},
        {path:"UseEffect",element:<UseEffectHookComp/>}
             ]},

    ]},
    

    //wildcard routing
  
    {path:"*",element:<PageNotFound/>},
])

export default router