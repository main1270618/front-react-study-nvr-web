import { createBrowserRouter } from "react-router-dom";

/* Layouts */
import { PortalLayout } from '../layouts';

/* Pages */
import PortalView from '../pages/portal/PortalView';

const router = createBrowserRouter([
    {
      path: "/",
      element: <PortalLayout/>,
      children: [
        {
            path: "/",
            element: <PortalView/>,
            children: [],
        }
      ],
    },
  ]);

  export default router;