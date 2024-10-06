import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddPerson from './components/AddPerson';
import RetrieveInfo from './components/RetrieveInfo';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4 bg-gray-100 min-h-screen"> 
        <h1 className="text-3xl font-bold mb-6">Directory Management App</h1>
        <nav className="mb-4">
          <Link to="/" className="text-blue-500 mr-4">Add Person</Link>
          <Link to="/retrieve" className="text-blue-500">Retrieve Information</Link>
        </nav>
        <Routes>
          <Route path="/" element={<AddPerson />} />
          <Route path="/retrieve" element={<RetrieveInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

