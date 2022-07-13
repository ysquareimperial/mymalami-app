import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavigation from "./Routes/AppNavigation";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Dashboard/Navbar.js";
import "react-toastify/dist/ReactToastify.css";
import { PDFDownloadLink } from '@react-pdf/renderer'
import ReportCard from "./Dashboard/Report/ReportCard";
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <AppNavigation /> */}
      <PDFDownloadLink document={<ReportCard />} fileName='ReportCard'>
        {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
      </PDFDownloadLink>
      <PDFRenderer document={<ReportCard />}></PDFRenderer>
      {/* <ReportCard /> */}
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
export default App;
