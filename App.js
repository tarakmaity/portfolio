import ReactDOM from "react-dom/client";
// import React, { useEffect, useState } from "react";
import Navbar from "./nevelement/Navbar";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./nevelement/Home";
import About from "./nevelement/About";
import Projects from "./nevelement/Projects";
import Contect from "./nevelement/Contect";


const App = ()=> {
    return(
        <div>
            <div><Navbar/></div>
            
            <Outlet/>
            
        </div>
    )}
    const navrouter= createBrowserRouter([
    {
        path : "/",
        element : (<App/>),
        children : [
    
    {
        path : "/home",
        element : (<Home/>)
    },
    {
        path : "/about",
        element : (<About/>)
    },
    {
        path : "/projects",
        element : (<Projects/>)
    },
    {
        path : "/contect",
        element : (<Contect/>)
    }]
}
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={navrouter}/>)