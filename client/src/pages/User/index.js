import './User.scss';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';
// Utils
import { useAuth } from '../../hooks/useAuth';
// Components
import Header from '../../components/User/Header';
import Sidebar from '../../components/User/Sidebar';
import FirstPage from '../../components/User/Content/FirstPage';
import MyPlans from '../../components/User/Content/MyPlans';
import NewPlan from '../../components/User/Content/NewPlan';
import Exercises from '../../components/User/Content/Exercises';

const User = () => {
    let location = useLocation();

    // Redirect not exists active user
    const user = useAuth();
    if (!user) return <Navigate to="/ingreso" />

    return (
        <div>
            <Header />
            <Sidebar />
            <div className="content">
                {location.pathname === "/usuario" ? <FirstPage user={user} /> : null}
                <Routes>
                    <Route path="/planes" element={<MyPlans user={user} />} />
                    <Route path="/nuevo-plan" element={<NewPlan user={user} />} />
                    <Route path="/ejercicios" element={<Exercises />} />
                </Routes>
            </div>
        </div>
    )
}

export default User
