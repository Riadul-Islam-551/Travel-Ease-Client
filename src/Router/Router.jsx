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
        element: <AddVehicles></AddVehicles>,
      },
      {
        path: "/myVehicles",
        element: <MyVehecles></MyVehecles>,
      },
      {
        path: "/booking",
        element: <Booking></Booking>,
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
