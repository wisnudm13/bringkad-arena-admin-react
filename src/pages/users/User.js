import { useParams } from "react-router-dom"


export function User() {
    const { user_id } = useParams()

    return <h1>User {user_id}</h1>
}