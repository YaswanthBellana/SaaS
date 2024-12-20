import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home.jsx';
import Courses from './components/Courses/courses.jsx';
import Review from "./components/Review/review.jsx";
import Hire from './components/Hire/hire.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/review" exact element={<Review />} />
        <Route path="/hire" exact element={<Hire />} />
      </Routes>
    </Router>
  );
}

export default App;