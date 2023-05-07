import { useEffect, useState } from "react"
import { Link, Navigate} from "react-router-dom"
import { getUserList } from "../../tools/bringkad_arena/User";
import DataTable from "../../components/Table/Table";
import { Button, Typography } from "@mui/material";

export function AdminList() {
    const params = {
        per_page: 10,
        page: 1
    }
    
    useEffect(() => {
        getAdminList(params)
        .then(function (res) {
            if(res.status == 200 && res.data.data.users.length > 0) {
                console.log(res.data.data.users)
                console.log("tessss")
            }

            console.log(res.status)

        }).catch(function (err) {
            console.log(err)
        })
    });


    return(
        <>
            <div style={{width: "100vw"}}>
                <div style={{ height: "5vh"}}>
                    <div style={{display: "flex"}}> 
                        <Typography>
                            Users
                        </Typography>

                        <Button sx={{marginLeft: "auto"}}>Add User</Button>
                    </div>
                   
                </div>
            
            {/* <DataTable rows={}></DataTable> */}
            </div>
            
            
        </>
    )

}