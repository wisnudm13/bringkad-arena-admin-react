import { AdminPanelLayout } from "../components/AdminPanelLayout"
import { Box, Button, Header } from "@mui/material"

export function Home() {
    return (
        <>
        <AdminPanelLayout display="flex"/>

        <Box display="flex" m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                {/* <Header title="DASHBOARD" subtitle="Welcome to your dashboard" /> */}

                <Box>
                <Button
                    sx={{
                    backgroundColor: "red",
                    color: "pink",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "10px 20px",
                    }}
                >
                    {/* <DownloadOutlinedIcon sx={{ mr: "10px" }} /> */}
                    Download Reports
                </Button>
                </Box>
            </Box>
        </Box>
        </>
        
    ) 
}