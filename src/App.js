import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/header";
import About from "./components/about";
import Contact from "./components/contact";
import Menu from "./components/menucard";
const App=()=>{
    return(
    <div className="app-container">
    <Header/>
    <Outlet/>
    {/* // <Footer/> */}
    </div>
    );

}
const root=ReactDOM.createRoot(document.getElementById("root"));
const route=createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/menu/:menuid",
                element:<Menu/>

            }
        ]
    }
    
]);

root.render(<RouterProvider router={route}/>);