import AdminRoute from "./admin";
import MemberRoute from "./member";
import LandingLayout from "../layouts/landing";
import { lazy } from "react";
import { createBrowserRouter} from "react-router-dom";

const LandingPage = lazy(() => import("../views/landing/index"));
const UnAuthorized = lazy(() => import("../views/errors/unAuthorized"));

const LandingRoute = {
  path : '/',
  element : <LandingLayout/>,
  children: [
    {
      path : '/',
      element : <LandingPage/>,
    },
    {
      path : '/401',
      element : <UnAuthorized/>,
    },
    {
      path : '*',
      element : <div className="h-[80vh] flex justify-center items-center text-9xl text-orange-500 font-bold"> <h1>Page Not Found</h1> </div>,
    }
  ]
}
  const router = createBrowserRouter([
    AdminRoute,
    MemberRoute,
    // AuthRoute,
    LandingRoute
    
  ]
  )

  export default router