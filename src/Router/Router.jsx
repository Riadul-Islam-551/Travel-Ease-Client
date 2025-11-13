import { createBrowserRouter } from "react-router";
import HomeLayout from "../layout/HomeLayout/HomeLayout";
import Home from "../pages/Home/Home";
import AllVehicles from "../pages/AllVehicles/AllVehicles";
import AddVehicles from "../pages/AddVehicles/AddVehicles";
import MyVehecles from "../pages/MyVehecles/MyVehecles";
import Booking from "../pages/Booking/Booking";
import Register from "../pages/Register/Register";
import DetailsLayout from "../layout/DetailsLayout/DetailsLayout";
import About from "../layout/About/About";
import Login from "../pages/Login/Login";
import Error from "../pages/Error/Error";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../components/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      { index: true, element: <Home></Home> },
      {
        path: "/vehicles",
        element: <AllVehicles></AllVehicles>,
      },
      {
        path: "/addVehicles",
        element: (
          <PrivateRoute>
            <AddVehicles></AddVehicles>
          </PrivateRoute>
        ),
      },
      {
        path: "/myVehicles",
        element: (
          <PrivateRoute>
            <MyVehecles></MyVehecles>
          </PrivateRoute>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/vehicles/:id",
    loader: ({ params }) =>
      fetch(`http://localhost:3000/vehicles/${params.id}`),
    element: (
      <PrivateRoute>
        <DetailsLayout></DetailsLayout>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loading></Loading>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
