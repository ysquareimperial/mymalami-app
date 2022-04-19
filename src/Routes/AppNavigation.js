import { useRoutes } from "react-router-dom";
import Signin from "../Sign/Signin";
import Signup from "../Sign/Signup";

function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <Signin />
        },
        {
            path: '/sign-up',
            element: <Signup />
        }
    ]);
    return element;
}
export default AppNavigation;
