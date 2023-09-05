import { Link, Outlet } from "react-router-dom";
import CustomSidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Box, Toolbar } from "@mui/material";

export function AdminPanelLayout() {
    return (
        <>
            <div style={( { display: "flex" })}>
            <CustomSidebar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Navbar></Navbar>
                <Outlet/>
            </div>
            

        </div>

        
      
        </>
    )
}