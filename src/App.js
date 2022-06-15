import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './Routes/AppNavigation';
import Navbar from './Dashboard/Navbar.js';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <AppNavigation />
    </div>
  );
}
export default App;
