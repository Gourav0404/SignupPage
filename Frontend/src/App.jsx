import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { useState } from 'react';
import ReffershHandler from './ReffershHandler';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const PrivateRoute = ({ element }) => {
    return isAuth ? element : <Navigate to='/login' />
  }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-700 p-4">
        <div className="w-full max-w-md bg-white shadow-md rounded-xl p-6">
          <ReffershHandler setIsAuth={setIsAuth} />
          <Routes>
            <Route path='/' element={<Navigate to='/login' />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<PrivateRoute element={<Home />} />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
