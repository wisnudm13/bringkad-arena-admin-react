import { Link, Outlet } from "react-router-dom";
import CustomSidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { Box, Toolbar } from "@mui/material";

export function AdminPanelLayout() {
    return (
        <>
            {/* <Box sx={{ display : "flex"}}>
                <Navbar></Navbar>
            </Box> */}
            {/* <Box sx={{ width: "30vw", flexShrink: 0}}>
                <CustomSidebar></CustomSidebar>
            </Box>
            <Box sx={{ width: `calc(100% - 50vw)`, minHeight: "100vh", backgroundColor: "red", flexGrow: 1, padding: 3}}>
                <Toolbar></Toolbar>
            </Box> */}
        <div style={( { display: "flex" })}>
            <CustomSidebar/>
            <div style={{display: "flex", flexDirection: "column"}}>
                <h1>tesssss</h1>
                <Outlet/>
            </div>
            

        </div>

        
      
        </>
    )
}