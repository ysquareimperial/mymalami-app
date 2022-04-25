import { useRoutes } from "react-router-dom";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import Classes from "../Dashboard.js/Classes";
import Index from "../Dashboard.js/Index";

function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <Signin />
        },
        {
            path: '/sign-up',
            element: <Signup />
        },
        {
            path: '/index',
            element: <Index />
        },
        {
            path: '/classes',
            element: <Classes />
        }
    ]);
    return element;
}
export default AppNavigation;
