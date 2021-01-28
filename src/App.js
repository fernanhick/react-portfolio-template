import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        {/*      <Sidebar />
      <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
