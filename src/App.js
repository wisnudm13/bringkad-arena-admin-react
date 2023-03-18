import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { UserRoutes } from './page_routes/UserRoutes';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>

      {/* User pages */}
      <Route path="/users/*" element={<UserRoutes/>}/>
      

      {/* Not Found */}
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </>
  
  )
}

export default App;
