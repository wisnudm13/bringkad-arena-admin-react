import { useEffect, useState } from "react"
import { Link, Navigate} from "react-router-dom"
import { getUserList } from "../../tools/bringkad_arena/User";
import DataTable from "../../components/Table/Table";
import { Button, Typography } from "@mui/material";
import UserTable from "../../components/Table/UserTable";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

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
                        phone_number: element.phone_number,
                        created_at: element.created_at
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
            <div style={{width: "100vw", backgroundColor: "#EFF2F8"}}>
                <div style={{display: "flex", flexDirection: "column"}}> 
                    <div style={{display: "flex", flexDirection: "row", padding: 15}}>
                        <div>
                            <h1>User</h1>
                        </div>

                        <div style={{marginRight: 0}}>
                        <Button 
                            sx={{
                                textAlign: "center",
                                borderRadius: 2,
                                color: "green", 
                                borderColor: "green",
                                '&:hover': {
                                    backgroundColor: 'green',
                                    color: 'white',
                                    borderColor: "green"
                                },
                            }} 
                            startIcon={<AddOutlinedIcon />}
                            variant="outlined">
                                Add
                        </Button>
                        </div>

                    </div>
                    <UserTable userListData={userListData}></UserTable>

                </div>
            </div>
            
            
        </>
    )

}