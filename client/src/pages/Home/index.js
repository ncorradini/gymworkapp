import './Home.scss';
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../../hooks/useAuth';

// Components
import Header from '../../components/Home/Header';
import HomeSection from '../../components/Home/Sections/HomeSection';
import ItWorkSection from '../../components/Home/Sections/ItWorkSection';
import SupportSection from '../../components/Home/Sections/SupportSection';
import Footer from '../../components/Home/Footer';
import Login from '../../components/Home/Login';
import Register from '../../components/Home/Register';

const Home = () => {
    let location = useLocation();

    // Redirect exists active user
    const user = useAuth();
    if(user) return <Navigate to="/usuario" />

    return (
        <>
            <Header />
            {location.pathname === '/' ?
            <>
                <HomeSection />
                <div className="spacer"></div>
                <ItWorkSection />
                <SupportSection />
                <Footer />
            </> : null}

            <Routes>
                <Route path="/ingreso" element={<Login />} />
                <Route path="/registro" element={<Register />} />
            </Routes>
        </>
    )
}

export default Home;
