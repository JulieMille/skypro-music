import { Routes, Route } from 'react-router-dom'
import { Register } from '../pages/Register/Register';
import { Login } from '../pages/Login/Login';
import { MainPage } from '../pages/MainPage/MainPage';
import { MyTracks } from '../pages/Mytracks/MyTracks';
import { Error } from '../pages/Error/Error'
import { Category } from '../pages/Category/Category';
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import AuthPage from '../pages/AuthPage/AuthPage';

export const AppRoutes = ({user, setUser, setIsLoggedin, isLoggedin, handleLogout}) => {
  return (
    <Routes>
      
      <Route path="/" element={<ProtectedRoute isAllowed={isLoggedin}><MainPage handleLogout={handleLogout}/></ProtectedRoute>} />
      <Route path="/favorites" element={<ProtectedRoute isAllowed={isLoggedin}><MyTracks /></ProtectedRoute>} />
      <Route path="/register" element={<AuthPage />} />
      <Route path="/login" element={<AuthPage setIsLoggedin={setIsLoggedin} setUser={setUser} isLoginMode={true} />} />
      <Route path="/category/:id" element={<ProtectedRoute isAllowed={isLoggedin}><Category /></ProtectedRoute>} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
