import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login/login.jsx';
// import Home from './components/Home/home.jsx';
// import Courses from './components/Courses/courses.jsx';
// import Activity from './components/Activity/activity.jsx';
// import Post from './components/Post/post.jsx';
// import AITeacher from './components/AITeacher/ai.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" exact element={<Home />} />
        <Route path="/courses" exact element={<Courses />} />
        <Route path="/activity" exact element={<Activity />} />
        <Route path="/post" exact element={<Post />} />
        <Route path="/profile" exact element={Profile} />
        <Route path="/ai_teacher" exact element={<AITeacher />} />
        <Route path="/job_board" exact element={<JobBoard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;