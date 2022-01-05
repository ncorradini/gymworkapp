import { useRoutes } from 'react-router-dom';

// Pages
import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';

// Components
import Login from '../components/Home/Login';
import Register from '../components/Home/Register';
import MyPlans from '../components/User/Content/MyPlans';
import NewPlan from '../components/User/Content/NewPlan';
import Exercises from '../components/User/Content/Exercises';


const Routing = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "/ingreso", element: <Login /> },
        { path: "/registro", element: <Register /> },
      ]
    },
    {
      path: "/usuario",
      element: <User />,
      children: [
        { path: "/usuario/planes", element: <MyPlans /> },
        { path: "/usuario/nuevo-plan", element: <NewPlan /> },
        { path: "/usuario/ejercicios", element: <Exercises /> }
      ]
    },
    { path: "*", element: <Error404 /> }
  ]);

  return routes;
}

export default Routing;