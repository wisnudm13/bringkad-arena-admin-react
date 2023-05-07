import { useEffect, useState } from "react"
import { Link, Navigate} from "react-router-dom"
import { getUserList } from "../../tools/bringkad_arena/User";
import DataTable from "../../components/Table/Table";
import { Button, Typography } from "@mui/material";
import UserTable from "../../components/Table/UserTable";

export function UserList() {
    const params = {
        per_page: 10,
        page: 1
    }

    const [userListData, setUserListData] = useState([])
    
    useEffect(() => {
        getUserList(params)
        .then(function (res) {
            if(res.status == 200 && res.data.data.users.length > 0) {
                const rows = [];

                res.data.data.users.forEach(element => {
                    var objData = {
                        id: element.id,
                        name: element.name,
                        phone_number: element.phone_number
                    }

                    rows.push(objData)
                });
                setUserListData(rows)
            }

        }).catch(function (err) {
            console.log(err)
        })
    }, []);

    return(
        <>
            <div style={{width: "100vw", display: "flex", flexDirection: "column"}}>
                <div style={{display: "flex", padding: 30}}> 
                    <UserTable userListData={userListData}></UserTable>

                            {/* <Button sx={{marginLeft: "auto"}}>Add User</Button> */}
                </div>
            </div>
            
            
        </>
    )

}