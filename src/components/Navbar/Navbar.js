import { Box, IconButton, useTheme } from "@mui/material"
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Navbar = () => {
    return (
        <Box display="flex" justifyContent="space-between" padding={2} backgroundColor="#162B21">
            <Box display="flex" marginLeft="auto">
                <IconButton>
                    <SettingsRoundedIcon style={ { color: "#ffffff"}}></SettingsRoundedIcon>
                </IconButton>
                <IconButton>
                    <LogoutRoundedIcon style={ { color: "#ffffff"}}></LogoutRoundedIcon>
                </IconButton>
            </Box>
        </Box>
    )
}

export default Navbar