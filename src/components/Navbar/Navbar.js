import { Box, IconButton, useTheme } from "@mui/material"
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useEffect } from "react";

const Navbar = () => {

    return (
        <div style={{ display: "flex", width: "100vw"}}>
            <Box display="flex" marginLeft="auto">
                <IconButton>
                    <SettingsRoundedIcon style={ { color: "red"}}></SettingsRoundedIcon>
                </IconButton>
                <IconButton>
                    <LogoutRoundedIcon style={ { color: "red"}}></LogoutRoundedIcon>
                </IconButton>
            </Box>
        </div>
    )
}

export default Navbar