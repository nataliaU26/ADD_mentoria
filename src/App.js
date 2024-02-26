import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticationStatus from './AuthenticationStatus';
import Datav from './Datav';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AuthenticationStatus />} />
          <Route path="/Hi" element={<Datav />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;