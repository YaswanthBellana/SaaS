import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home.jsx';
import Courses from './components/Courses/courses.jsx';
import Hire from './components/Hire/hire.jsx';
import Register from './components/Register/register.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/hire" exact element={<Hire />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;