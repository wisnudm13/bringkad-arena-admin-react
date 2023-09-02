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
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

function CustomSidebar() {
    const { collapseSidebar } = useProSidebar();
    const [activeMenu, setActiveMenu] = useState(null);

    function handleActive(event) {
      if (!event.target.classList.value.includes("active")) {
        event.target.classList.toggle("active");

        if (activeMenu) {
          activeMenu.classList.remove("active")
        
        setActiveMenu(event.target);
        }

      }


    }

    return (
        <div id="sidebar" style={({ height: "100%" }, { display: "flex" })}>
          <Sidebar 
            backgroundColor="#007E3F"
            width="18vw"
            style={{ height: "100vh"}}>
            <Menu menuItemStyles={{
              button: ({ level, active, disabled }) => {
                  return {
                    '&:hover': {
                      backgroundColor: 'white',
                      color: '#007E3F',
                    },
                    color: "white",
                    fontFamily: "Poppins",
                    backgroundColor: active ? '#eecef9' : undefined,
                  };
              },
            }}
              >
              <MenuItem
                icon={<MenuOutlinedIcon />}
                onClick={() => {
                  collapseSidebar();
                }}
                style={{ textAlign: "center"}}
              >                
                <h3 style={{fontFamily: "Poppins"}}>Bringkad Arena Admin</h3>
                <Divider sx={{
                        "&::before, &::after": {
                        borderColor: "black",
                        },
                    }}></Divider>
              </MenuItem>
    
              <MenuItem 
                component={<Link to="/"/>} 
                icon={<HomeOutlinedIcon />}
                onClick={handleActive}
                >Home</MenuItem>
              <MenuItem component={<Link to="/users"/>} icon={<PeopleOutlinedIcon />}>User</MenuItem>
              <MenuItem icon={<ContactsOutlinedIcon />}>Facility</MenuItem>
              <MenuItem icon={<ReceiptOutlinedIcon />}>Order</MenuItem>
              <MenuItem icon={<HelpOutlineOutlinedIcon />}>Transaction</MenuItem>
              <MenuItem component={<Link to="/admins"/>} icon={<AdminPanelSettingsOutlinedIcon />}>Admin</MenuItem>
              <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
            </Menu>
          </Sidebar>
        </div>
      );
    
}

export default CustomSidebar