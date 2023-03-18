import { Link, Outlet } from "react-router-dom";

export function AdminPanelLayout() {
    return (
        <>
            <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/users">User</Link>
            </li>
            </ul>
      </nav>

      <Outlet/>
        </>
    )
}