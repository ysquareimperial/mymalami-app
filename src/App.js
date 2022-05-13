import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavigation from './Routes/AppNavigation';
import Navbar from './Dashboard/Navbar.js';
function App() {
  return (
    <div>
      <Navbar />
      <AppNavigation />
    </div>
  );
}
export default App;
