import { useRoutes } from "react-router-dom";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import Class from "../Dashboard/Class/Class";
import Student from "../Dashboard/Student/Student";
import Subject from "../Dashboard/Subject/Subject";
import Home from "../Dashboard/Home";
import Report from "../Dashboard/Report/Report";
// import Index from "../Dashboard.js/Index";
import AppIndex from "./AppIndex";
import CreateClass from "../Dashboard/Class/CreateClass";
import CreateSubject from "../Dashboard/Subject/CreateSubject";

function AppNavigation() {
    let element = useRoutes([
        {
            path: "/",
            element: <AppIndex />,
            children: [
                { index: true, element: <Home /> },
                {
                    path: "/",
                    element: <Signin />
                },
                {
                    path: '/sign-up',
                    element: <Signup />
                },
                {
                    path: '/home',
                    element: <Home />
                },
                {
                    path: '/class',
                    element: <Class />
                },
                {
                    path: '/student',
                    element: <Student />
                },
                {
                    path: '/subject',
                    element: <Subject />
                },
                {
                    path: '/report',
                    element: <Report />
                },
                {
                    path: '/create-class',
                    element: <CreateClass />
                },
                {
                    path: '/create-subject',
                    element: <CreateSubject />
                }
            ]
        }
    ]);
    return element;
}
export default AppNavigation;
