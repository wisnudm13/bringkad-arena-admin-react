import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { UserRoutes } from './page_routes/UserRoutes';
import { NotFound } from './pages/NotFound';
import { ProtectedRoutes } from './components/ProtectedRoute';
import { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")

  return (
    <>
    <div style={{background: backgroundColor}}>
      <Routes>
        <Route path="/login" element={<Login/>}/>

        {/* Protected routes */}
        <Route element={<ProtectedRoutes/>}>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/users/*" element={<UserRoutes/>}/>
        </Route>


        
        

        {/* Not Found */}
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </>
  
  )
}

export default App;
