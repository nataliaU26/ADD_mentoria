import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationStatus from './layout/AuthenticationStatus';
import Datav from './components/Datav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthenticationStatus />} />
          <Route path="/Datav" element={<Datav />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;