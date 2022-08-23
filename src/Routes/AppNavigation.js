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
import CreateStudent from "../Dashboard/Student/CreateStudent";
import EditClass from "../Dashboard/Class/EditClass";
import EditSubject from "../Dashboard/Subject/EditSubject";
import EditStudent from "../Dashboard/Student/EditStudent";
import Settings from "../Dashboard/UserSettings/Settings";
import Profile from "../Profile/Profile";
import EditUserInfo from "../Profile/EditUserInfo";
import EditSchoolInfo from "../Profile/EditSchoolInfo";
// import Record from "../Dashboard/Record/Record";
import SubjectRecord from "../Dashboard/Record/SubjectRecord";
import LandingPage from "../LandingPage/LandingPage";
import ForgotPassword from "../Auth/ForgotPassword";
import EmailSent from "../Auth/EmailSent";
import CreateNewPassword from "../Auth/CreateNewPassword";
// import ReportCard from "../Dashboard/Report/ReportCard";
import ViewReportCard from "../Dashboard/Report/ViewReportCard";

function AppNavigation() {
  let element = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
      children: [{ index: true }],
    },
    {
      element: <AppIndex />,
      children: [
        { index: true, element: <Home /> },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/class",
          element: <Class />,
        },
        {
          path: "/class/create-class",
          element: <CreateClass />,
        },
        {
          path: "/class/edit-class",
          element: <EditClass />,
        },
        {
          path: "/student",
          element: <Student />,
        },
        {
          path: "/student/create-student",
          element: <CreateStudent />,
        },
        {
          path: "/student/edit-student",
          element: <EditStudent />,
        },
        {
          path: "/subject",
          element: <Subject />,
        },
        {
          path: "/subject/create-subject",
          element: <CreateSubject />,
        },
        {
          path: "/subject/edit-subject",
          element: <EditSubject />,
        },
        {
          path: "/report",
          element: <Report />,
        },
        {
          path: "/create-student",
          element: <CreateStudent />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/edit-user-info",
          element: <EditUserInfo />,
        },
        {
          path: "/edit-school-info",
          element: <EditSchoolInfo />,
        },
        {
          path: "/record",
          element: <SubjectRecord />,
        },
        {
          path: "/report/report-cards",
          element: <ViewReportCard />,
        },
      ],
    },  
    {
      path: "/sign-in",
      element: <Signin />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "email-sent",
      element: <EmailSent />,
    },
    {
      path: "create-new-password",
      element: <CreateNewPassword />,
    },
  ]);
  return element;
}
export default AppNavigation;
