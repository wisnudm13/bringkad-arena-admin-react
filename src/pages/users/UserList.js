import { useEffect, useState } from "react"
import { Link, Navigate} from "react-router-dom"


export function UserList() {
    return(
        <>
            <div style={{display: "flex"}}>
                <h1>User list</h1>
                <Link to="/users/1">User 1</Link>
                <Link to="/users/2">User 2</Link>
            </div>
            
        </>
    )

}