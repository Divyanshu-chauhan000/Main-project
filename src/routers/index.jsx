import AdminRoute from "./admin";
import MemberRoute from "./member";
// import AuthRoute from "./auth";
import { createBrowserRouter} from "react-router-dom";

  const router = createBrowserRouter([
    AdminRoute,
    MemberRoute,
    // AuthRoute
  ]
  )

  export default router