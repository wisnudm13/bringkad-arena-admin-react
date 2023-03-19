// import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"
// import { Box, IconButton, Typography } from "@mui/material"
// import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
// import StadiumRoundedIcon from '@mui/icons-material/StadiumRounded';
// import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
// import EventAvailableRoundedIcon from '@mui/icons-material/EventAvailableRounded';
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
// import { useState } from "react";
// import { Link } from "react-router-dom";


// const Item = ({title, to, icon, selected, setSelected}) => {
//     return (
//         <MenuItem 
//             active={selected === title} 
//             style={{color: "blue"}}
//             onClick={() => setSelected(title)}
//             icon={icon}
//             component={<Link to={to}></Link>  }
//         >
//         <Typography>{title}</Typography>      
//         </MenuItem>
//     )
// }

// const CustomSidebar = () => {
//     const [isCollapsed, setIsCollapsed] = useState(false)
//     const [selected, setSelected] = useState("Home")
//     return (
//         <Box
//             sx={{
//                 "& .pro-sidebar-inner": {
//                     background: `#yellow !important`
//                 },
//                 "& .pro-icon-wrapper": {
//                     backgroundColor: "transparent !important"
//                 },
//                 "& .pro-inner-item": {
//                     padding: "5px 35px 5px 20px !important"
//                 },
//                 "& .pro-inner-item:hover": {
//                     color: "#868fb !important"
//                 },
//                 "& .pro-menu-item.active": {
//                     color: "#ffffff important"
//                 }
//             }}
//         >
//             <Sidebar defaultCollapsed={isCollapsed}>
//                 <Menu iconShape="square">
//                     <MenuItem
//                         onClick={() => setIsCollapsed(!isCollapsed)}
//                         icon={isCollapsed ? <MenuRoundedIcon></MenuRoundedIcon> : undefined }
//                         style={{
//                             margin: "10px 0 20px 0",
//                             color: "grey",
//                           }}
//                     >
//                         {!isCollapsed && (
//                             <Box
//                                 display="flex"
//                                 justifyContent="space-between"
//                                 alignItems="center"
//                                 ml="15px"
//                             >
//                                 <Typography variant="h3" color="red">
//                                 ADMINIS
//                                 </Typography>
//                                 <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
//                                 <MenuRoundedIcon />
//                                 </IconButton>
//                             </Box>
//                         )}

//                     </MenuItem>

//                     <Box paddingLeft={isCollapsed ? undefined : "10%"}>
//                         <Item 
//                             title="Home"
//                             to="/"
//                             icon={<HomeRoundedIcon/>}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />
//                         <Item 
//                             title="User"
//                             to="/users"
//                             icon={<PeopleRoundedIcon/>}
//                             selected={selected}
//                             setSelected={setSelected}
//                         />

//                     </Box>

//                 </Menu>
//             </Sidebar>


//         </Box>
//     )
// }

// export default CustomSidebar;

import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

function CustomSidebar() {
    const { collapseSidebar } = useProSidebar();

    return (
        <div id="sidebar" style={({ height: "100vh" }, { display: "flex" })}>
          <Sidebar style={{ height: "100vh" }}>
            <Menu>
              <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center",}}
              >
                {" "}
                
                <h2>Admin</h2>
              </MenuItem>
    
              <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
              <MenuItem icon={<PeopleOutlinedIcon />}>User</MenuItem>
              <MenuItem icon={<ContactsOutlinedIcon />}>Facility</MenuItem>
              <MenuItem icon={<ReceiptOutlinedIcon />}>Order</MenuItem>
              <MenuItem icon={<HelpOutlineOutlinedIcon />}>Transaction</MenuItem>
              <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
            </Menu>
          </Sidebar>
        </div>
      );
    
}

export default CustomSidebar