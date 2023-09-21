import { Routes, Route } from 'react-router-dom'
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { MainPage } from '../pages/MainPage/MainPage';
import { MyTracks } from '../pages/Mytracks/MyTracks';
import { Error } from '../pages/Error/Error'
import { Category } from '../pages/Category/Category';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';

export const AppRoutes = ({user, onLogin}) => {
  return (
    <Routes>
      
      <Route path="/" element={<ProtectedRoute isAllowed={user?.login === 'taradam'}><MainPage/></ProtectedRoute>} />
      <Route path="/favorites" element={<ProtectedRoute isAllowed={user?.login === 'taradam'}><MyTracks /></ProtectedRoute>} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login onLogin={onLogin}/>} />
      <Route path="/category/:id" element={<ProtectedRoute isAllowed={user?.login === 'taradam'}><Category /></ProtectedRoute>} />
      <Route path="*" element={<Error />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  );
};
