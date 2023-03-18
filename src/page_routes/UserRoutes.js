import { Routes, Route } from "react-router-dom"
import { UserList } from '../pages/users/UserList';
import { User } from "../pages/users/User";
import { AdminPanelLayout } from "../pages/AdminPanelLayout";

export function UserRoutes() {
    return (
        <>
            <Routes>
                <Route element={ <AdminPanelLayout/>}>
                    <Route index element={<UserList/>}/>
                    <Route path=":user_id" element={<User/>}/>
                </Route>
                
            </Routes>
        </>
        
    )
}