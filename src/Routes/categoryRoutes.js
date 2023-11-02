import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute';
import { Category } from '../pages/Category/Category';

export const CategoryRoutes = ({ isLoggedin, isPlaying, isLoading, handleChoice, addFavorite, deleteFavorite }) => {

    return (
    <Routes>
        <Route path=":id" element={<ProtectedRoute isAllowed={isLoggedin}><Category isPlaying={isPlaying} isLoading={isLoading} handleChoice={handleChoice} addFavorite={addFavorite} deleteFavorite={deleteFavorite} /></ProtectedRoute>} />
    </Routes>
    )
}